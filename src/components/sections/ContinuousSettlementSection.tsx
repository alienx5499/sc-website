import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { continuousSettlementFeature } from '@/data/features';

export const ContinuousSettlementSection: React.FC = () => {
  return (
    <section id="content-6" className="py-24 bg-black border-y border-zinc-850">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Graphic Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative max-w-[280px] sm:max-w-[320px] w-full group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 to-amber-700/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />
              <Image
                src={continuousSettlementFeature.imageSrc}
                alt={continuousSettlementFeature.imageAlt}
                width={320}
                height={640}
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-zinc-800 mx-auto"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            {continuousSettlementFeature.blocks.map((block, idx) => (
              <div key={idx} className="space-y-2.5 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  {block.title}
                </h3>
                <p className="text-base text-zinc-400 leading-relaxed pl-3.5">
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
