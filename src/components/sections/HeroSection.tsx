import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero-2"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/30 overflow-hidden"
    >
      <Container>
        {/* Hero Copy */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
            Get USD stability.
            <br />
            <span className="text-gray-900">
              Stay in self-custodied Bitcoin.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A steady dollar balance, in a wallet you control. No banks, no
            tokens, no third parties.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              variant="primary"
              href={siteConfig.releasesUrl}
              isExternal
              className="text-base px-7 py-3"
            >
              Download App
            </Button>
            <Button
              variant="light"
              href={siteConfig.githubUrl}
              isExternal
              className="text-base px-7 py-3"
            >
              GitHub Repo
            </Button>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="flex flex-row justify-center items-center gap-3 sm:gap-6 p-4">
            <div className="relative w-[160px] sm:w-[260px] md:w-[300px] transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/images/app-balance-img.png"
                alt="Stable Channels app — balance bar with USD stability (left)"
                width={300}
                height={600}
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200/60"
                priority
              />
            </div>
            <div className="relative w-[160px] sm:w-[260px] md:w-[300px] transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/images/app-balance-right-img.png"
                alt="Stable Channels app — balance bar with BTC exposure (right)"
                width={300}
                height={600}
                className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200/60"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
