import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { theOpportunityFeature } from '@/data/features';

export const TheOpportunitySection: React.FC = () => {
  return (
    <section
      id="content-2"
      className="py-24 bg-zinc-900 dark:bg-zinc-950 text-white relative overflow-hidden border-b border-zinc-800 transition-colors duration-300"
    >
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Graphic Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-[300px] sm:max-w-[340px] w-full group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 to-amber-700/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />
              <Image
                src={theOpportunityFeature.imageSrc}
                alt={theOpportunityFeature.imageAlt}
                width={340}
                height={680}
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-zinc-750 dark:border-zinc-800 mx-auto"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              badge={theOpportunityFeature.badge}
              title={theOpportunityFeature.title}
              align="left"
              isDark
              className="mb-4"
            />
            <div className="space-y-5 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              <p className="p-5 rounded-2xl bg-zinc-800/60 dark:bg-zinc-900/40 border border-zinc-700/60 dark:border-zinc-800/80">
                Stablecoins require trust in banks and token issuers. Stable
                Channels doesn&apos;t. It uses Bitcoin in Lightning channels to
                create dollar stability - no tokens, no custodians, no points of
                failure.
              </p>
              <p className="p-5 rounded-2xl bg-zinc-800/60 dark:bg-zinc-900/40 border border-zinc-700/60 dark:border-zinc-800/80">
                Stable Channels reimagines dollar stability using Bitcoin&apos;s
                Lightning Network - instant continuous settlement, peer-to-peer, with zero
                intermediaries.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
