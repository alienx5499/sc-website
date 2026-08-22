import React from 'react';
import { BentoGrid } from '@/components/ui/BentoGrid';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { bentoFeaturesData } from '@/data/bentoFeatures';

export const BentoSection: React.FC = () => {
  return (
    <section id="services-1" className="py-20 bg-black border-y border-zinc-850 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          badge="Architecture & Pillars"
          title="Engineered for Trustless Stability"
          subtitle="Stable Channels combines native Lightning Network settlement with peer-to-peer risk management. No intermediaries, no synthetic tokens, and zero custody risk."
          className="mb-12"
        />

        <BentoGrid items={bentoFeaturesData} />
      </div>
    </section>
  );
};
