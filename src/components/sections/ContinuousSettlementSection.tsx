import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { continuousSettlementFeature } from '@/data/features';

export const ContinuousSettlementSection: React.FC = () => {
  return (
    <section id="content-6" className="py-24 bg-gray-50/70 border-y border-gray-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Graphic Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative max-w-[280px] sm:max-w-[320px] w-full">
              <Image
                src={continuousSettlementFeature.imageSrc}
                alt={continuousSettlementFeature.imageAlt}
                width={320}
                height={640}
                className="rounded-3xl shadow-xl border border-gray-200/80 mx-auto"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            {continuousSettlementFeature.blocks.map((block, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                  {block.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {block.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
