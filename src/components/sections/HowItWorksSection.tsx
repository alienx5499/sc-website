'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { howItWorksFeature } from '@/data/features';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const bulletVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.12,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="content-1" data-section="content-1" className="py-24 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800/80 transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatedSection>
              <SectionHeader
                badge={howItWorksFeature.badge}
                title={howItWorksFeature.title}
                align="left"
                className="mb-6"
              />
            </AnimatedSection>

            {howItWorksFeature.subtitle && (
              <AnimatedSection delay={0.1}>
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 tracking-tight">
                  {howItWorksFeature.subtitle}
                </h3>
              </AnimatedSection>
            )}

            <motion.div
              className="space-y-4 pt-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {howItWorksFeature.bullets?.map((bullet, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={bulletVariants}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-zinc-50/80 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/60 hover:border-[#F7931A]/30 dark:hover:border-[#F7931A]/30 transition-all duration-300 shadow-2xs group"
                >
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-[#F7931A]/10 border border-[#F7931A]/30 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-[#F7931A]">{index + 1}</span>
                    </div>
                  </div>
                  <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {bullet.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Graphic Column */}
          <AnimatedSection className="lg:col-span-5 flex justify-center" direction="right" delay={0.2}>
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
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};
