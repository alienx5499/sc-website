import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BentoGrid } from '@/components/ui/BentoGrid';
import { bentoFeaturesData } from '@/data/bentoFeatures';

export const BentoSection: React.FC = () => {
  return (
    <section id="services-1" className="py-24 bg-white dark:bg-black border-y border-zinc-200 dark:border-zinc-800/80 transition-colors duration-300 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader
          badge="Architecture & Pillars"
          title="Engineered for Trustless Stability"
          subtitle="Stable Channels combines native Lightning Network speed with peer-to-peer risk management. No intermediaries, no tokens, and zero custodial risk."
          className="mb-16"
        />

        <BentoGrid items={bentoFeaturesData} />
      </Container>
    </section>
  );
};
