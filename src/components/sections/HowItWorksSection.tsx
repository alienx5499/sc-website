import React from 'react';
import Image from 'next/image';
import { CircleDot } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { howItWorksFeature } from '@/data/features';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="content-1" className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              badge={howItWorksFeature.badge}
              title={howItWorksFeature.title}
              align="left"
              className="mb-6"
            />
            {howItWorksFeature.subtitle && (
              <h3 className="text-xl font-semibold text-gray-800 tracking-tight">
                {howItWorksFeature.subtitle}
              </h3>
            )}

            <div className="space-y-4 pt-2">
              {howItWorksFeature.bullets?.map((bullet, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div className="mt-1 flex-shrink-0">
                    <CircleDot className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {bullet.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Graphic Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-[280px] sm:max-w-[320px] w-full">
              <Image
                src={howItWorksFeature.imageSrc}
                alt={howItWorksFeature.imageAlt}
                width={320}
                height={640}
                className="rounded-3xl shadow-xl border border-gray-200/80 mx-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
