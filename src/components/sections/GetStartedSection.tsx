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
    <section id="get-started" data-section="get-started" className="py-24 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800/80 transition-colors duration-300">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Connecting line between steps (desktop) */}
          <div className="hidden md:block absolute top-[3.5rem] left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-[#F7931A]/0 via-[#F7931A]/30 to-[#F7931A]/0 z-0" />

          {getStartedSteps.map((step, index) => (
            <motion.div
              key={step.stepNumber}
              custom={index}
              variants={stepVariants}
              className="relative z-10 p-8 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/40 backdrop-blur-sm border border-zinc-200/80 dark:border-zinc-800/80 hover:border-[#F7931A]/40 dark:hover:border-[#F7931A]/40 hover:bg-white dark:hover:bg-zinc-900/80 transition-all duration-300 text-center flex flex-col items-center shadow-xs group"
            >
              {/* Animated step number with gradient ring */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#F7931A]/10 border border-[#F7931A]/30 text-[#E08213] dark:text-[#F7931A] flex items-center justify-center font-extrabold text-3xl shadow-inner group-hover:scale-110 group-hover:bg-[#F7931A]/15 transition-all duration-300">
                  {step.stepNumber}
                </div>
                {/* Glow ring on hover */}
                <div className="absolute -inset-2 rounded-2xl bg-[#F7931A]/0 group-hover:bg-[#F7931A]/5 blur-lg transition-all duration-500" />
              </div>

              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-[#E08213] dark:group-hover:text-[#F7931A] transition-colors">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
