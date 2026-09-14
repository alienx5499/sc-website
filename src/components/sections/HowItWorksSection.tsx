'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { howItWorksFeature } from '@/data/features';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import {
  FoldablePhone,
  PhoneDevice,
} from '@/components/ui/iphone-duo';

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
    <section id="content-1" data-section="content-1" className="py-24 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy Column */}
          <div className="lg:col-span-6 space-y-6">
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
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  {howItWorksFeature.subtitle}
                </h3>
              </AnimatedSection>
            )}

            <motion.div
              className="space-y-3.5 pt-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {howItWorksFeature.bullets?.map((bullet, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={bulletVariants}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-zinc-50/70 dark:bg-[#121214] border border-zinc-200 dark:border-white/[0.08] hover:border-[#F7931A]/40 dark:hover:border-[#F7931A]/40 transition-all duration-300 group"
                >
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-white dark:bg-black border border-zinc-300 dark:border-white/[0.15] flex items-center justify-center group-hover:border-[#F7931A] transition-colors">
                      <span className="text-[11px] font-bold text-[#F7931A]">{index + 1}</span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {bullet.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Interactive iPhone Duo 3D Device Column */}
          <AnimatedSection
            className="lg:col-span-6 flex flex-col items-center justify-center relative"
            direction="right"
            delay={0.2}
          >
            <div className="w-full max-w-[580px] lg:max-w-[620px] flex flex-col items-center relative">
              <FoldablePhone duration={1.5} className="w-full flex flex-col items-center">
                <PhoneDevice
                  modelSrc="/models/iphone-duo.glb"
                  screenSrc="/wallpapers/sc-wallpaper.svg"
                  coverSrc="/wallpapers/sc-wallpaper.svg"
                  screenOverlaySrc="/wallpapers/api-apps.svg"
                  coverOverlaySrc="/wallpapers/api-cover.svg"
                  revealSrc="/wallpapers/home-photo.svg"
                  blur={48}
                  parallax={1}
                  className="w-full"
                />
              </FoldablePhone>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
};
