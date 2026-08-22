'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Heart, Shield, FileText, Lock, Zap } from 'lucide-react';
import { GithubIcon, TwitterIcon } from '@/components/ui/Icons';
import { GooglePlayButton, AppStoreButton } from '@/components/base/buttons/app-store-buttons';
import { siteConfig } from '@/data/siteConfig';

function FooterCTA() {
  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl border border-zinc-800 bg-black overflow-hidden p-8 sm:p-12 md:p-16 mb-8">
      {/* Animated Background Gradient Glow Spheres */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 h-[350px] w-[350px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: 'radial-gradient(circle at center, #F59E0B, transparent 70%)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full opacity-15 blur-[90px]"
          style={{
            background: 'radial-gradient(circle at center, #D97706, transparent 70%)',
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
          <Zap className="w-3.5 h-3.5" />
          <span>Instant Settlement on Lightning</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Ready to stabilize your Bitcoin?
        </h2>

        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          Download Stable Channels today for continuous dollar stability with zero custodial risk.
        </p>

        {/* 2nd Store Buttons Placement */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
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
        </div>
      </div>
    </div>
  );
}

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-zinc-400 pt-10 pb-12 border-t border-zinc-850 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Zyura-Style Top CTA */}
        <FooterCTA />

        {/* Top Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {/* Logo & Description */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/app-icon.svg"
                alt={siteConfig.name}
                width={36}
                height={36}
                className="rounded-xl shadow-xs"
              />
              <span className="text-lg font-bold text-white tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Self-custodial USD stability on Bitcoin Lightning. No banks, no synthetic tokens, and zero custodial risk.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-amber-500/50 hover:bg-amber-500/10 transition-all"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/alienx5499"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-amber-500/50 hover:bg-amber-500/10 transition-all"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product & Protocol */}
          <div>
            <h4 className="font-semibold mb-4 text-white flex items-center gap-2 text-sm tracking-wide">
              <Zap className="h-4 w-4 text-amber-400" />
              Protocol
            </h4>
            <ul className="space-y-2.5 text-sm">
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

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-white flex items-center gap-2 text-sm tracking-wide">
              <FileText className="h-4 w-4 text-amber-400" />
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
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
                  Technical Docs &amp; Demos
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
                  Release Binaries
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a
                  href="#faqs-2"
                  className="text-zinc-400 hover:text-amber-400 transition-colors inline-block relative group"
                >
                  Knowledge Base &amp; FAQ
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="font-semibold mb-4 text-white flex items-center gap-2 text-sm tracking-wide">
              <Lock className="h-4 w-4 text-amber-400" />
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
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
                  Contact &amp; Inquiries
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Regulatory Disclaimer */}
        <div className="pt-6 pb-6 border-t border-zinc-800/80 text-[11px] text-zinc-500 leading-relaxed">
          <p>
            Stable Channels is self-custodial open-source software and is not a financial institution, exchange, brokerage, custodian, or money transmitter. It does not issue or custody tokens, does not hold fiat or cryptocurrency on behalf of users, and provides no custodial services. All key generation, routing, and channel operations execute exclusively on the user&apos;s personal device over the Bitcoin Lightning Network.
          </p>
        </div>

        {/* Bottom Bar matching Zyura */}
        <div className="border-t border-zinc-850 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
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
