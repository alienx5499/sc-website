'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { mainNavItems } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';
import { Button } from '@/components/ui/Button';
import { GithubIcon } from '@/components/ui/Icons';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const pathname = usePathname();
  const isNavigatingRef = useRef(false);

  // Scroll spy for active section on home page
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sections = [
      'hero-2',
      'services-1',
      'content-1',
      'get-started',
      'reviews-2',
      'faqs-2',
    ];

    const handleScroll = () => {
      if (isNavigatingRef.current) return;

      const scrollPosition = window.scrollY;
      const offset = 180; // Offset for floating pill

      let current = '';
      if (scrollPosition < 80) {
        setActiveSection('');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition + offset >= top) {
            current = `#${id}`;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (pathname === '/' && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        isNavigatingRef.current = true;
        setActiveSection(href);

        const offset = 100;
        const targetTop =
          targetEl.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: targetTop,
          behavior: 'smooth',
        });

        window.history.pushState(null, '', href);

        setTimeout(() => {
          isNavigatingRef.current = false;
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
          className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg shadow-gray-900/5 border border-gray-200/80 transition-all"
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
            <span className="text-base sm:text-lg font-bold tracking-tight text-gray-900">
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
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/60'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-blue-50/80 rounded-full border border-blue-100"
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

          {/* Right Actions (GitHub + Buttons) */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
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
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-600 hover:text-gray-900"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
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
              className="md:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-gray-200/80"
            >
              <div className="flex flex-col space-y-1">
                {mainNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                  <Button
                    variant="light"
                    href={siteConfig.contactFormUrl}
                    isExternal
                    fullWidth
                    className="rounded-xl py-2 text-xs font-semibold"
                  >
                    Contact
                  </Button>
                  <Button
                    variant="primary"
                    href={siteConfig.releasesUrl}
                    isExternal
                    fullWidth
                    className="rounded-xl py-2 text-xs font-semibold"
                  >
                    Download App
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
