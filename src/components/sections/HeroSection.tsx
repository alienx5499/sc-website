'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';

import { GooglePlayButton, AppStoreButton } from '@/components/ui/app-store-buttons';

import { siteConfig } from '@/data/siteConfig';

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      data-section="hero"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-b from-zinc-50 via-white to-zinc-50/50 dark:from-black dark:via-black dark:to-black overflow-hidden transition-colors duration-300"
    >
      {/* Dot grid pattern background */}
      <div className="absolute inset-0 dot-grid opacity-60 dark:opacity-40" />

      {/* Ambient gradient blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#F7931A]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#F7931A]/5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        {/* Hero Copy */}
        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center space-y-6"
          initial="hidden"
          animate="visible"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm text-zinc-600 dark:text-zinc-400 text-xs font-medium tracking-normal"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F7931A] animate-pulse" />
            Decentralized Bitcoin Volatility Protection
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-[1.12]"
          >
            Get USD stability.
            <br />
            <span className="bg-gradient-to-r from-[#F7931A] via-[#E08213] to-[#C6720D] dark:from-[#F7931A] dark:via-[#F7931A] dark:to-[#E08213] bg-clip-text text-transparent">
              Stay in self-custodied Bitcoin.
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            A steady dollar balance, in a wallet you control. No banks, no
            tokens, no third parties.
          </motion.p>

          {/* App Store Buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3 pt-4"
          >
            <GooglePlayButton
              href={siteConfig.googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              className="hover:scale-105 transition-transform shadow-xs"
            />
            <AppStoreButton
              href={siteConfig.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              className="hover:scale-105 transition-transform opacity-90 hover:opacity-100 shadow-xs"
            />
          </motion.div>
        </motion.div>

        {/* Hero Visual Mockup with perspective */}
        <motion.div
          className="relative z-10 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          <div className="flex flex-row justify-center items-center gap-3 sm:gap-6 p-4" style={{ perspective: '1200px' }}>
            <motion.div
              className="relative w-[160px] sm:w-[260px] md:w-[300px]"
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{ rotateY: -3, rotateX: 2, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <div className="absolute -inset-3 bg-gradient-to-br from-[#F7931A]/20 via-transparent to-[#F7931A]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/images/app-balance-img.png"
                alt="Stable Channels app - balance bar with USD stability (left)"
                width={300}
                height={600}
                className="relative w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl shadow-zinc-900/10 dark:shadow-black/80 border border-zinc-200 dark:border-zinc-800"
                priority
              />
            </motion.div>
            <motion.div
              className="relative w-[160px] sm:w-[260px] md:w-[300px]"
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{ rotateY: 3, rotateX: 2, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <Image
                src="/images/app-balance-right-img.png"
                alt="Stable Channels app - balance bar with BTC exposure (right)"
                width={300}
                height={600}
                className="relative w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl shadow-zinc-900/10 dark:shadow-black/80 border border-zinc-200 dark:border-zinc-800"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
