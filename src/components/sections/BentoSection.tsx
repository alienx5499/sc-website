'use client';

import React from 'react';
import { BentoGrid } from '@/components/ui/BentoGrid';

export const BentoSection: React.FC = () => {
  return (
    <section
      id="features"
      data-section="features"
      className="bg-black py-16 md:py-28 relative border-b border-zinc-850"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-100 to-zinc-400 relative z-30">
            Why Choose
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-[#F7931A] to-[#E08213]">
              Stable Channels?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto px-4">
            Discover the advantages of instant, continuous USD stability powered by Bitcoin Lightning.
          </p>
        </div>

        <BentoGrid />
      </div>
    </section>
  );
};
