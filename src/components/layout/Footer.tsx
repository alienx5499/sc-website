import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  GithubIcon,
  AppleIcon,
  AndroidIcon,
  DesktopIcon,
} from '@/components/ui/Icons';
import { footerNavItems, appDownloadLinks } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';
import { Container } from '@/components/ui/Container';

export const Footer: React.FC = () => {
  const getIcon = (iconName: 'apple' | 'android' | 'desktop') => {
    switch (iconName) {
      case 'apple':
        return <AppleIcon className="w-4 h-4" />;
      case 'android':
        return <AndroidIcon className="w-4 h-4" />;
      case 'desktop':
        return <DesktopIcon className="w-4 h-4" />;
    }
  };

  return (
    <footer id="footer-4" className="bg-black text-zinc-400 pt-16 pb-12 border-t border-zinc-850">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/app-icon.svg"
                alt={siteConfig.name}
                width={32}
                height={32}
                className="rounded-lg opacity-90"
              />
              <span className="text-lg font-bold text-white tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Self-custodial USD stability on Bitcoin Lightning. No tokens, no
              custody risk, no intermediaries.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block"></div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNavItems.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith('#') ? (
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Download App Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Get The App
            </h3>
            <div className="flex flex-col gap-2.5">
              {appDownloadLinks.map((dl) => (
                <a
                  key={dl.label}
                  href={dl.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/60 hover:bg-zinc-850 text-zinc-200 hover:text-white text-xs font-medium border border-zinc-800 hover:border-zinc-700 transition-all hover:-translate-y-0.5"
                >
                  {getIcon(dl.iconName)}
                  <span>
                    {dl.label} {dl.subtitle ? `- ${dl.subtitle}` : ''}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-xs text-zinc-500 leading-relaxed">
          <p>
            Stable Channels is not a cryptocurrency exchange, brokerage,
            custodian, or money services business. It does not offer the
            purchase or sale of cryptocurrency, does not operate an order book
            or matching engine, and provides no fiat on- or off-ramps. Stable
            Channels is self-custodial, open-source software: your keys and your
            funds remain on your own device at all times, and neither Stable
            Channels nor any third party ever takes custody of them. The
            software enables peers to manage Bitcoin volatility and exposure
            directly with one another over the Lightning Network.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-zinc-850 text-zinc-400">
            <p>
              © {siteConfig.year} {siteConfig.name}. All rights reserved.
            </p>
            <Link
              href="/privacy"
              className="text-xs text-amber-500 hover:underline"
            >
              Privacy Policy & Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
