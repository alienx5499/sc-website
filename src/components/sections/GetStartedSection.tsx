'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { getStartedSteps } from '@/data/getStarted';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const stepVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.15,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

export const GetStartedSection: React.FC = () => {
  return (
    <section id="get-started" data-section="get-started" className="py-24 bg-white dark:bg-black transition-colors duration-300">
      <Container>
        <AnimatedSection>
          <SectionHeader
            badge="Get Started"
            title="Up and running in minutes"
            subtitle="Simple three-step setup to protect your Bitcoin purchasing power."
            className="mb-16"
          />
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Connecting line between steps (desktop) */}
          <div className="hidden md:block absolute top-[3.5rem] left-[16.67%] right-[16.67%] h-px bg-zinc-200 dark:bg-white/[0.08] z-0" />

          {getStartedSteps.map((step, index) => (
            <motion.div
              key={step.stepNumber}
              custom={index}
              variants={stepVariants}
              className="relative z-10 p-8 rounded-2xl md:rounded-3xl bg-zinc-50/70 dark:bg-[#121214] border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 text-center flex flex-col items-center group"
            >
              {/* Step number */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-black border border-zinc-200 dark:border-white/[0.1] text-[#F7931A] flex items-center justify-center font-bold text-2xl group-hover:scale-105 group-hover:border-[#F7931A] transition-all duration-300">
                  {step.stepNumber}
                </div>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3 group-hover:text-[#F7931A] transition-colors">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-[#86868b] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
