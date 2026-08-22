'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { CornerDownLeft, Zap, FileText, Lock, Heart } from 'lucide-react';
import { GithubIcon, TwitterIcon } from '@/components/ui/Icons';
import { Badge } from '@/components/ui/badge';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { SparklesCore } from '@/components/ui/sparkles';
import { siteConfig } from '@/data/siteConfig';

function FooterCTA() {
  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl border border-zinc-800 p-1.5 sm:p-2 mb-8">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="relative overflow-hidden rounded-xl md:rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 sm:p-8 md:p-10 w-full">
        {/* Animated Background gradient */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.div
            className="absolute top-0 left-0 h-[280px] w-[280px] rounded-full opacity-25 blur-[100px]"
            style={{
              background: 'radial-gradient(circle at center, #F59E0B, transparent 70%)',
            }}
            animate={{
              x: [0, 25, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute right-0 bottom-0 h-[240px] w-[240px] rounded-full opacity-20 blur-[80px]"
            style={{
              background: 'radial-gradient(circle at center, #D97706, transparent 70%)',
            }}
            animate={{
              x: [0, -20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </div>

        {/* Sparkles effect */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <SparklesCore
            id="footer-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={60}
            className="absolute inset-0 w-full h-full"
            particleColor="#F59E0B"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Ready to get USD stability on Bitcoin?
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              A steady dollar balance, in a wallet you control. No banks, no synthetic tokens, and zero custodial risk.
            </p>
          </div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 shrink-0"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          >
            <Link
              href={siteConfig.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-5 text-black font-bold text-sm bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 rounded-xl inline-flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95"
            >
              <span>Download App</span>
              <Badge className="bg-black/20 p-1 text-black border-transparent">
                <CornerDownLeft className="size-3.5" />
              </Badge>
            </Link>

            <Link
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-5 text-white font-medium text-sm border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 hover:border-zinc-600 rounded-xl inline-flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <span>GitHub</span>
              <Badge className="bg-zinc-800 text-zinc-300 border-zinc-700">
                <GithubIcon className="size-3.5" />
              </Badge>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-zinc-400 pt-8 pb-12 border-t border-zinc-850 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Interactive CTA Card */}
        <FooterCTA />

        {/* 4-Column Navigation Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-b border-zinc-850">
          {/* Brand Column */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/app-icon.svg"
                alt={siteConfig.name}
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-base font-bold text-white tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Self-custodial USD stability on Bitcoin Lightning. No banks, no synthetic tokens, and zero custodial risk.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <Link
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-amber-500/50 hover:bg-amber-500/10 transition-all inline-flex items-center justify-center"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </Link>
              <Link
                href="https://x.com/alienx5499"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-amber-500/50 hover:bg-amber-500/10 transition-all inline-flex items-center justify-center"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Protocol Column */}
          <div>
            <h4 className="font-semibold mb-3.5 text-white flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400">
              <Zap className="h-3.5 w-3.5 text-amber-400" />
              Protocol
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="#services-1"
                  className="text-zinc-400 hover:text-amber-400 transition-colors inline-block relative group"
                >
                  Architecture &amp; Pillars
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a
                  href="#content-1"
                  className="text-zinc-400 hover:text-amber-400 transition-colors inline-block relative group"
                >
                  How It Works
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a
                  href="#content-6"
                  className="text-zinc-400 hover:text-amber-400 transition-colors inline-block relative group"
                >
                  Continuous Settlement
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a
                  href="#get-started"
                  className="text-zinc-400 hover:text-amber-400 transition-colors inline-block relative group"
                >
                  Get Started
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold mb-3.5 text-white flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400">
              <FileText className="h-3.5 w-3.5 text-amber-400" />
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-amber-400 transition-colors inline-block relative group"
                >
                  GitHub Repository
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a
                  href="#reviews-2"
                  className="text-zinc-400 hover:text-amber-400 transition-colors inline-block relative group"
                >
                  Docs &amp; Research
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.releasesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-amber-400 transition-colors inline-block relative group"
                >
                  Releases &amp; Binaries
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a
                  href="#faqs-2"
                  className="text-zinc-400 hover:text-amber-400 transition-colors inline-block relative group"
                >
                  Knowledge Base FAQ
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold mb-3.5 text-white flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400">
              <Lock className="h-3.5 w-3.5 text-amber-400" />
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-zinc-400 hover:text-amber-400 transition-colors inline-block relative group"
                >
                  Privacy Policy &amp; Terms
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/toneloc/stable-channels/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-amber-400 transition-colors inline-block relative group"
                >
                  MIT License
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contactFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-amber-400 transition-colors inline-block relative group"
                >
                  Contact Inquiries
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Self-Custody Disclaimer */}
        <div className="py-6 text-[11px] text-zinc-500 leading-relaxed border-b border-zinc-850">
          <p>
            Stable Channels is self-custodial open-source software and is not a financial institution, exchange, brokerage, custodian, or money transmitter. It does not issue or custody tokens, does not hold fiat or cryptocurrency on behalf of users, and provides no custodial services. All operations execute exclusively on the user&apos;s personal device over the Bitcoin Lightning Network.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-zinc-400">
          <p>
            © {siteConfig.year} {siteConfig.name}. Open source under the MIT License.
          </p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="inline h-3.5 w-3.5 text-amber-500 fill-current animate-pulse" /> for Bitcoiners by{' '}
            <a
              href="https://github.com/alienx5499"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-2 font-medium"
            >
              @alienx5499
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
