import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero-2"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-black overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      <Container>
        {/* Hero Copy */}
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            Decentralized Bitcoin Volatility Protection
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Get USD stability.
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Stay in self-custodied Bitcoin.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
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
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/80 border border-zinc-800"
                priority
              />
            </div>
            <div className="relative w-[160px] sm:w-[260px] md:w-[300px] transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/images/app-balance-right-img.png"
                alt="Stable Channels app - balance bar with BTC exposure (right)"
                width={300}
                height={600}
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/80 border border-zinc-800"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
