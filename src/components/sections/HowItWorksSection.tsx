import React from 'react';
import Image from 'next/image';
import { CircleDot } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { howItWorksFeature } from '@/data/features';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="content-1" className="py-24 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800/80 transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              badge={howItWorksFeature.badge}
              title={howItWorksFeature.title}
              align="left"
              className="mb-6"
            />
            {howItWorksFeature.subtitle && (
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 tracking-tight">
                {howItWorksFeature.subtitle}
              </h3>
            )}

            <div className="space-y-4 pt-2">
              {howItWorksFeature.bullets?.map((bullet, index) => (
                <div key={index} className="flex items-start gap-3.5 p-4 rounded-xl bg-zinc-50/80 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-2xs">
                  <div className="mt-1 flex-shrink-0">
                    <CircleDot className="w-4 h-4 text-[#F7931A]" />
                  </div>
                  <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {bullet.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Graphic Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-[280px] sm:max-w-[320px] w-full group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#F7931A]/20 to-[#C6720D]/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />
              <Image
                src={howItWorksFeature.imageSrc}
                alt={howItWorksFeature.imageAlt}
                width={320}
                height={640}
                className="relative w-full h-auto rounded-3xl shadow-xl dark:shadow-2xl border border-zinc-200 dark:border-zinc-800 mx-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
