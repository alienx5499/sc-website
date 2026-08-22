'use client';

import React from 'react';
import { BentoGrid } from '@/components/ui/BentoGrid';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const BentoSection: React.FC = () => {
  return (
    <section
      id="features"
      data-section="features"
      className="bg-white dark:bg-black py-16 md:py-28 relative border-b border-zinc-200 dark:border-zinc-850 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-600 dark:from-white dark:via-zinc-100 dark:to-zinc-400 relative z-30">
              Why Choose
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#F7931A] via-[#F7931A] to-[#E08213]">
                Stable Channels?
              </span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
              Discover the advantages of instant, continuous USD stability powered by Bitcoin Lightning.
            </p>
          </div>
        </AnimatedSection>

        <BentoGrid />
      </div>
    </section>
  );
};
