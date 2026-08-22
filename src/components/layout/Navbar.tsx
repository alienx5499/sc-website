'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Download } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { siteConfig } from '@/data/siteConfig';

const NAV_ITEMS = [
  { name: 'Features', path: '/', section: 'features' },
  { name: 'How It Works', path: '/', section: 'content-1' },
  { name: 'Continuous Settlement', path: '/', section: 'content-6' },
  { name: 'Live Ticker', path: '/', section: 'live-ticker' },
  { name: 'FAQ', path: '/', section: 'faqs-2' },
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

      const sections = ['hero', 'features', 'content-1', 'content-6', 'live-ticker', 'faqs-2'];
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

      if (scrollPosition < 50) {
        currentSection = 'hero';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavClick = (item: { name: string; path: string; section: string }) => {
    if (pathname !== '/') {
      router.push(`/#${item.section}`);
      setIsOpen(false);
      return;
    }

    const element =
      document.querySelector(`[data-section="${item.section}"]`) ||
      document.getElementById(item.section) ||
      document.querySelector(`#${item.section}`);

    if (element) {
      const offset = 100;
      const rect = (element as HTMLElement).getBoundingClientRect();
      const offsetPosition = rect.top + window.pageYOffset - offset;

      setActiveSection(item.section);
      isNavigatingRef.current = true;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      window.history.pushState(null, '', `#${item.section}`);

      setTimeout(() => {
        isNavigatingRef.current = false;
        setActiveSection(item.section);
      }, 800);
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full py-4 md:py-6 px-4 pointer-events-none">
      <div
        className="pointer-events-auto flex items-center justify-between px-6 py-2.5 bg-black/85 backdrop-blur-xl rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.8)] relative border border-zinc-800 max-w-4xl w-full h-[58px]"
      >
        {/* Brand Logo & Name */}
        <div className="flex items-center flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
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
                  }, 800);
                }
              }}
              className="flex items-center gap-2.5 group"
            >
              <Image
                src="/images/app-icon.svg"
                alt={siteConfig.name}
                width={32}
                height={32}
                className="rounded-lg shadow-xs transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-bold text-base text-white tracking-tight flex items-center gap-1.5">
                {siteConfig.name}
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {NAV_ITEMS.map((item, index) => {
            const isActive = activeSection === item.section;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  onClick={() => handleNavClick(item)}
                  className={`text-xs uppercase tracking-wider font-semibold transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#F7931A]'
                      : 'text-zinc-400 hover:text-white'
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
              </motion.div>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <motion.div
          className="hidden sm:flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Link
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/60 border border-transparent hover:border-zinc-700 transition-all flex items-center justify-center"
            aria-label="GitHub"
          >
            <GithubIcon className="size-4" />
          </Link>

          <Link
            href={siteConfig.releasesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-black bg-[#F7931A] hover:bg-[#E08213] rounded-full shadow-[0_0_20px_rgba(247,147,26,0.35)] hover:shadow-[0_0_25px_rgba(247,147,26,0.55)] transition-all duration-300 transform active:scale-95"
          >
            <span>Download App</span>
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-full mt-2 inset-x-4 max-w-lg mx-auto bg-black/95 backdrop-blur-2xl rounded-2xl border border-zinc-800 p-5 shadow-2xl z-50"
          >
            <div className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`text-left text-sm font-semibold py-2 px-3 rounded-lg transition-colors ${
                    activeSection === item.section
                      ? 'text-[#F7931A] bg-[#F7931A]/10'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                <Link
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <GithubIcon className="size-4" />
                  <span>GitHub</span>
                </Link>

                <Link
                  href={siteConfig.releasesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-[#F7931A] text-black text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-[#F7931A]/30"
                >
                  <Download className="size-4" />
                  <span>Download</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
