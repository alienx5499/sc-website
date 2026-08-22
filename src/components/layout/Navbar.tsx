'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { mainNavItems, appDownloadLinks } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';
import { Button } from '@/components/ui/Button';
import { GithubIcon, AppleIcon, AndroidIcon, DesktopIcon } from '@/components/ui/Icons';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Track active section on scroll
  useEffect(() => {
    if (pathname !== '/') {
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = mainNavItems
        .map((item) => item.href)
        .filter((href) => href.startsWith('/#'))
        .map((href) => href.replace('/#', ''));

      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sectionIds.reverse()) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(`/#${sectionId}`);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Handle smooth scroll navigation
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });

          window.history.pushState(null, '', href);
          setActiveSection(href);
        }
      } else {
        // Navigate to home then scroll
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 700);
      }
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full py-4 px-4 sm:px-6 pointer-events-none">
      <div className="w-full max-w-5xl pointer-events-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-full shadow-lg shadow-gray-900/5 dark:shadow-black/40 border border-gray-200/80 dark:border-zinc-800/80 transition-all ${
            isScrolled ? 'ring-1 ring-black/5 dark:ring-white/10' : ''
          }`}
        >
          {/* Logo & Brand */}
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState(null, '', '/');
                setActiveSection('');
              }
            }}
            className="flex items-center gap-2.5 flex-shrink-0 group"
          >
            <Image
              src="/images/app-icon.svg"
              alt={siteConfig.name}
              width={32}
              height={32}
              className="rounded-lg shadow-xs group-hover:scale-105 transition-transform"
            />
            <span className="text-base sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2">
            {mainNavItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                    isActive
                      ? 'text-amber-600 dark:text-amber-400'
                      : 'text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/60 dark:hover:bg-zinc-800/60'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-amber-50 dark:bg-amber-950/40 rounded-full border border-amber-200/60 dark:border-amber-700/40"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions (Theme + GitHub + Buttons) */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />

            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <Button
              variant="light"
              href={siteConfig.contactFormUrl}
              isExternal
              className="text-xs px-3.5 py-1.5 rounded-full"
            >
              Contact
            </Button>

            <Button
              variant="primary"
              href={siteConfig.releasesUrl}
              isExternal
              className="text-xs px-4 py-1.5 rounded-full shadow-xs"
            >
              Download
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-gray-200/80 dark:border-zinc-800 rounded-3xl p-4 shadow-xl space-y-3"
            >
              <nav className="flex flex-col space-y-1">
                {mainNavItems.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                        isActive
                          ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 font-semibold'
                          : 'text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-800/60'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-40" />
                    </a>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-gray-100 dark:border-zinc-800 flex flex-col gap-2">
                <Button
                  variant="primary"
                  href={siteConfig.releasesUrl}
                  isExternal
                  className="w-full justify-center py-2.5 text-sm rounded-xl"
                >
                  Download Stable Channels
                </Button>
                <Button
                  variant="light"
                  href={siteConfig.contactFormUrl}
                  isExternal
                  className="w-full justify-center py-2 text-xs rounded-xl"
                >
                  Get in Touch
                </Button>
              </div>

              {/* Download Platform Shortcuts */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100 dark:border-zinc-800">
                {appDownloadLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-2 rounded-xl bg-gray-50 dark:bg-zinc-800/50 hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-zinc-300 text-center transition-colors"
                  >
                    {item.iconName === 'apple' && <AppleIcon className="w-4 h-4 mb-1 text-gray-900 dark:text-white" />}
                    {item.iconName === 'android' && <AndroidIcon className="w-4 h-4 mb-1 text-gray-900 dark:text-white" />}
                    {item.iconName === 'desktop' && <DesktopIcon className="w-4 h-4 mb-1 text-gray-900 dark:text-white" />}
                    <span className="text-[10px] font-medium leading-tight">{item.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
