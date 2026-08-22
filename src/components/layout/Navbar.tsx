'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Download } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { siteConfig } from '@/data/siteConfig';

const NAV_ITEMS = [
  { name: 'Features', section: 'features' },
  { name: 'Settlement', section: 'content-6' },
  { name: 'Process', section: 'content-1' },
  { name: 'FAQ', section: 'faqs-2' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const pathname = usePathname();
  const router = useRouter();
  const isNavigatingRef = useRef(false);

  // Track active section on home page
  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      if (isNavigatingRef.current) return;

      const sections = ['hero', 'features', 'content-6', 'content-1', 'faqs-2'];
      const scrollPosition = window.scrollY;
      const offset = 200;

      let currentSection = 'hero';

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionName = sections[i];
        const section =
          document.querySelector(`[data-section="${sectionName}"]`) ||
          document.getElementById(sectionName) ||
          document.querySelector(`#${sectionName}`);

        if (section) {
          const rect = (section as HTMLElement).getBoundingClientRect();
          const sectionTop = window.scrollY + rect.top;

          if (scrollPosition + offset >= sectionTop) {
            currentSection = sectionName;
            break;
          }
        }
      }

      if (scrollPosition < 60) {
        currentSection = 'hero';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavClick = (sectionId: string) => {
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
      setIsOpen(false);
      return;
    }

    const element =
      document.querySelector(`[data-section="${sectionId}"]`) ||
      document.getElementById(sectionId) ||
      document.querySelector(`#${sectionId}`);

    if (element) {
      const offset = 90;
      const rect = (element as HTMLElement).getBoundingClientRect();
      const offsetPosition = rect.top + window.pageYOffset - offset;

      setActiveSection(sectionId);
      isNavigatingRef.current = true;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      window.history.pushState(null, '', `#${sectionId}`);

      setTimeout(() => {
        isNavigatingRef.current = false;
        setActiveSection(sectionId);
      }, 700);
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full py-4 px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2 bg-white/80 dark:bg-black/80 backdrop-blur-xl rounded-full shadow-lg shadow-black/5 dark:shadow-black/60 border border-zinc-200/80 dark:border-zinc-800/80 max-w-3xl w-full h-[54px] transition-colors duration-300">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              isNavigatingRef.current = true;
              setActiveSection('hero');
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState(null, '', '/');
              setTimeout(() => {
                isNavigatingRef.current = false;
                setActiveSection('hero');
              }, 700);
            }
          }}
          className="flex items-center gap-2.5 flex-shrink-0 group"
        >
          <Image
            src="/images/app-icon.svg"
            alt={siteConfig.name}
            width={28}
            height={28}
            className="rounded-md transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-bold text-sm text-zinc-900 dark:text-white tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.section;
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.section)}
                className={`text-xs font-semibold tracking-wide transition-colors relative py-1 ${
                  isActive
                    ? 'text-[#F7931A]'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F7931A] rounded-full shadow-[0_0_8px_rgba(247,147,26,0.8)]"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Link
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex p-1.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="size-4" />
          </Link>

          <Link
            href={siteConfig.releasesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-black bg-[#F7931A] hover:bg-[#E08213] rounded-full shadow-xs shadow-[#F7931A]/30 transition-all duration-300 transform active:scale-95"
          >
            <span>Download</span>
            <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-full mt-2 inset-x-4 max-w-sm mx-auto bg-white/95 dark:bg-black/95 backdrop-blur-2xl rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 shadow-xl z-50 transition-colors"
          >
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.section)}
                  className={`text-left text-sm font-semibold py-2 px-3 rounded-lg transition-colors ${
                    activeSection === item.section
                      ? 'text-[#F7931A] bg-[#F7931A]/10'
                      : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
                <Link
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <GithubIcon className="size-4" />
                  <span>GitHub</span>
                </Link>

                <Link
                  href={siteConfig.releasesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-[#F7931A] text-black text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs shadow-[#F7931A]/30"
                >
                  <Download className="size-3.5" />
                  <span>Download</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
