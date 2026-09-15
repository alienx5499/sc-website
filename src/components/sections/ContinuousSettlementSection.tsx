'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { continuousSettlementFeature } from '@/data/features';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Iphone17Pro } from '@/components/ui/iphone-17-pro';

const blockVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

export const ContinuousSettlementSection: React.FC = () => {
  return (
    <section
      id="content-6"
      data-section="content-6"
      className="py-24 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden"
    >
      {/* Subtle noise overlay for dark mode */}
      <div className="noise-overlay absolute inset-0 pointer-events-none dark:block hidden" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          {/* Graphic Column: iPhone 17 Pro with myphone.png */}
          <AnimatedSection
            className="lg:col-span-5 order-2 lg:order-1 flex justify-center"
            direction="left"
          >
            <div className="relative max-w-[280px] sm:max-w-[320px] w-full group">
              <Iphone17Pro
                src="/myphone.png"
                width="100%"
                height="100%"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </AnimatedSection>

          {/* Text Column */}
          <motion.div
            className="lg:col-span-7 order-1 lg:order-2 space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {continuousSettlementFeature.blocks.map((block, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={blockVariants}
                className="space-y-2 p-6 rounded-2xl md:rounded-3xl bg-zinc-50/70 dark:bg-[#121214] border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  {block.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-[#86868b] leading-relaxed">
                  {block.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
