import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { GooglePlayButton, AppStoreButton } from '@/components/base/buttons/app-store-buttons';
import { siteConfig } from '@/data/siteConfig';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero-2"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-b from-zinc-50 via-white to-zinc-50/50 dark:from-black dark:via-black dark:to-black overflow-hidden transition-colors duration-300"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      <Container>
        {/* Hero Copy */}
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            Decentralized Bitcoin Volatility Protection
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-[1.12]">
            Get USD stability.
            <br />
            <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 dark:from-amber-400 dark:via-amber-500 dark:to-amber-600 bg-clip-text text-transparent">
              Stay in self-custodied Bitcoin.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A steady dollar balance, in a wallet you control. No banks, no
            tokens, no third parties.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
            <Button
              variant="primary"
              href={siteConfig.releasesUrl}
              isExternal
              className="text-base px-8 py-3.5"
            >
              Download App
            </Button>
            <Button
              variant="light"
              href={siteConfig.githubUrl}
              isExternal
              className="text-base px-8 py-3.5"
            >
              GitHub Repo
            </Button>
          </div>

          {/* App Store Buttons from Untitled UI */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <GooglePlayButton
              href={siteConfig.googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              className="hover:scale-105 transition-transform shadow-xs"
            />
            <AppStoreButton
              href={siteConfig.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              className="hover:scale-105 transition-transform opacity-90 hover:opacity-100 shadow-xs"
            />
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="relative z-10 mt-16 max-w-4xl mx-auto">
          <div className="flex flex-row justify-center items-center gap-3 sm:gap-6 p-4">
            <div className="relative w-[160px] sm:w-[260px] md:w-[300px] transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/images/app-balance-img.png"
                alt="Stable Channels app - balance bar with USD stability (left)"
                width={300}
                height={600}
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl shadow-zinc-900/10 dark:shadow-black/80 border border-zinc-200 dark:border-zinc-800"
                priority
              />
            </div>
            <div className="relative w-[160px] sm:w-[260px] md:w-[300px] transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/images/app-balance-right-img.png"
                alt="Stable Channels app - balance bar with BTC exposure (right)"
                width={300}
                height={600}
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl shadow-zinc-900/10 dark:shadow-black/80 border border-zinc-200 dark:border-zinc-800"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
