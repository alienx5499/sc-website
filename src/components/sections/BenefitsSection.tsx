import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { benefitsData } from '@/data/benefits';

export const BenefitsSection: React.FC = () => {
  return (
    <section id="services-1" className="py-20 bg-white dark:bg-black border-y border-zinc-200 dark:border-zinc-800/80 transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit) => (
            <div
              key={benefit.id}
              className="p-7 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/40 backdrop-blur-sm border border-zinc-200/80 dark:border-zinc-800/80 hover:border-amber-500/40 dark:hover:border-amber-500/40 hover:bg-white dark:hover:bg-zinc-900/80 hover:-translate-y-1.5 transition-all duration-300 shadow-xs hover:shadow-lg group"
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
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
