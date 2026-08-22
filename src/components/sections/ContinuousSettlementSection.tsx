'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { continuousSettlementFeature } from '@/data/features';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

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
    <section id="content-6" data-section="content-6" className="py-24 bg-zinc-50/50 dark:bg-black border-y border-zinc-200 dark:border-zinc-850 transition-colors duration-300 relative overflow-hidden">
      {/* Subtle noise overlay for dark mode */}
      <div className="noise-overlay absolute inset-0 pointer-events-none dark:block hidden" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center relative z-10">
          {/* Graphic Column */}
          <AnimatedSection className="lg:col-span-5 order-2 lg:order-1 flex justify-center" direction="left">
            <div className="relative max-w-[280px] sm:max-w-[320px] w-full group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#F7931A]/20 to-[#C6720D]/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />
              <Image
                src={continuousSettlementFeature.imageSrc}
                alt={continuousSettlementFeature.imageAlt}
                width={320}
                height={640}
                className="relative w-full h-auto rounded-3xl shadow-xl dark:shadow-2xl border border-zinc-200 dark:border-zinc-800 mx-auto"
              />
            </div>
          </AnimatedSection>

          {/* Text Column */}
          <motion.div
            className="lg:col-span-7 order-1 lg:order-2 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {continuousSettlementFeature.blocks.map((block, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={blockVariants}
                className="space-y-2.5 p-6 rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-[#F7931A]/30 dark:hover:border-[#F7931A]/30 transition-all duration-300 shadow-xs group"
              >
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F7931A] group-hover:scale-150 transition-transform" />
                  {block.title}
                </h3>
                <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed pl-3.5">
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
