import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { benefitsData } from '@/data/benefits';

export const BenefitsSection: React.FC = () => {
  return (
    <section id="services-1" className="py-20 bg-white border-b border-gray-100">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit) => (
            <div
              key={benefit.id}
              className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50/70 flex items-center justify-center p-3 mb-5 group-hover:scale-110 transition-transform">
                <Image
                  src={benefit.iconSrc}
                  alt={benefit.title}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
