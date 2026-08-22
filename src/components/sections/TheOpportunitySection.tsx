import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { theOpportunityFeature } from '@/data/features';

export const TheOpportunitySection: React.FC = () => {
  return (
    <section
      id="content-2"
      className="py-24 bg-gray-900 text-white relative overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Graphic Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-[300px] sm:max-w-[340px] w-full">
              <Image
                src={theOpportunityFeature.imageSrc}
                alt={theOpportunityFeature.imageAlt}
                width={340}
                height={680}
                className="w-full h-auto rounded-3xl shadow-2xl mx-auto"
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
            <div className="space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              <p>
                Stablecoins require trust in banks and token issuers. Stable
                Channels doesn&apos;t. It uses Bitcoin in Lightning channels to
                create dollar stability — no tokens, no custodians, no points of
                failure.
              </p>
              <p>
                Stable Channels reimagines dollar stability using Bitcoin&apos;s
                Lightning Network — instant settlement, peer-to-peer, no
                intermediaries.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
