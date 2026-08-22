import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { benefitsData } from '@/data/benefits';

export const BenefitsSection: React.FC = () => {
  return (
    <section id="services-1" className="py-20 bg-black border-y border-zinc-800/80">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit) => (
            <div
              key={benefit.id}
              className="p-7 rounded-2xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 hover:border-amber-500/40 hover:bg-zinc-900/80 hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center p-3 mb-5 group-hover:scale-110 transition-transform">
                <Image
                  src={benefit.iconSrc}
                  alt={benefit.title}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
