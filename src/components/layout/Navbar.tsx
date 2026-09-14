'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Sparkles, HelpCircle, Layers, BookOpen } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { siteConfig } from '@/data/siteConfig';
import { NavBar, NavItem } from '@/components/ui/tubelight-navbar';

// Decluttered to 4 clean, essential navigational destinations:
// 1. Features -> #features
// 2. How It Works -> #content-1
// 3. Resources -> #reviews-2
// 4. FAQ -> #faqs-2
const DECLUTTERED_ITEMS: (NavItem & { section: string })[] = [
  { name: 'Features', url: '#features', section: 'features', icon: Sparkles },
  { name: 'How It Works', url: '#content-1', section: 'content-1', icon: Layers },
  { name: 'Resources', url: '#reviews-2', section: 'reviews-2', icon: BookOpen },
  { name: 'FAQ', url: '#faqs-2', section: 'faqs-2', icon: HelpCircle },
];

export const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Features');
  const pathname = usePathname();
  const router = useRouter();
  const isNavigatingRef = useRef(false);

  // Synchronize active tubelight tab with window scroll
  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      if (isNavigatingRef.current) return;

      const scrollPosition = window.scrollY;
      const offset = 220;

      for (let i = DECLUTTERED_ITEMS.length - 1; i >= 0; i--) {
        const item = DECLUTTERED_ITEMS[i];
        const section =
          document.querySelector(`[data-section="${item.section}"]`) ||
          document.getElementById(item.section) ||
          document.querySelector(`#${item.section}`);

        if (section) {
          const rect = (section as HTMLElement).getBoundingClientRect();
          const sectionTop = window.scrollY + rect.top;

          if (scrollPosition + offset >= sectionTop) {
            setActiveTab(item.name);
            return;
          }
        }
      }

      if (scrollPosition < 300) {
        setActiveTab('Features');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleTabChange = (tabName: string) => {
    const item = DECLUTTERED_ITEMS.find((i) => i.name === tabName);
    if (!item) return;

    if (pathname !== '/') {
      router.push(`/${item.url}`);
      return;
    }

    const element =
      document.querySelector(`[data-section="${item.section}"]`) ||
      document.getElementById(item.section) ||
      document.querySelector(`#${item.section}`);

    if (element) {
      const offset = 85;
      const rect = (element as HTMLElement).getBoundingClientRect();
      const offsetPosition = rect.top + window.pageYOffset - offset;

      setActiveTab(tabName);
      isNavigatingRef.current = true;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      window.history.pushState(null, '', item.url);

      setTimeout(() => {
        isNavigatingRef.current = false;
        setActiveTab(tabName);
      }, 700);
    }
  };

  const brandSlot = (
    <Link
      href="/"
      onClick={(e) => {
        if (pathname === '/') {
          e.preventDefault();
          isNavigatingRef.current = true;
          window.scrollTo({ top: 0, behavior: 'smooth' });
          window.history.pushState(null, '', '/');
          setTimeout(() => {
            isNavigatingRef.current = false;
            setActiveTab('Features');
          }, 700);
        }
      }}
      className="flex items-center gap-2 pl-2 pr-1 py-1 group"
    >
      <Image
        src="/images/app-icon.svg"
        alt={siteConfig.name}
        width={24}
        height={24}
        className="rounded-md transition-transform duration-300 group-hover:scale-105"
      />
      <span className="font-bold text-xs sm:text-sm text-zinc-900 dark:text-white tracking-tight hidden lg:inline-block">
        {siteConfig.name}
      </span>
    </Link>
  );

  const rightSlot = (
    <div className="flex items-center gap-1">
      <ThemeToggle className="size-7 sm:size-8" />
      <Link
        href={siteConfig.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        aria-label="GitHub"
      >
        <GithubIcon className="size-4" />
      </Link>
    </div>
  );

  return (
    <NavBar
      items={DECLUTTERED_ITEMS}
      activeTab={activeTab}
      onTabChange={handleTabChange}
      brandSlot={brandSlot}
      rightSlot={rightSlot}
    />
  );
};
