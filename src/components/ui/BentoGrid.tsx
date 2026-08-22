'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Shield,
  Zap,
  CreditCard,
  BarChart3,
  Brain,
  FileCode,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const BentoGridItem = ({
  title,
  description,
  icon,
  href = '#',
  className,
  size = 'small',
}: BentoGridItemProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, damping: 25 },
    },
  };

  const isExternal = href.startsWith('http');

  return (
    <motion.div
      variants={variants}
      className={cn(
        'group border-[#F7931A]/20 bg-zinc-900/50 dark:bg-zinc-950/60 hover:border-[#F7931A]/40 relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border px-6 pt-6 pb-10 shadow-md transition-all duration-500',
        className,
      )}
    >
      {/* Background Grid Pattern */}
      <div className="absolute top-0 -right-1/2 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#F7931A15_1px,transparent_1px),linear-gradient(to_bottom,#F7931A15_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]" />

      {/* Giant Watermarked Icon on Bottom Right */}
      <div className="text-[#F7931A]/5 group-hover:text-[#F7931A]/10 absolute right-1 bottom-3 scale-[6] transition-all duration-700 group-hover:scale-[6.2] pointer-events-none">
        {icon}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          {/* Icon Badge */}
          <div className="bg-[#F7931A]/10 text-[#F7931A] shadow-[#F7931A]/10 group-hover:bg-[#F7931A]/20 group-hover:shadow-[#F7931A]/20 mb-4 flex h-12 w-12 items-center justify-center rounded-full shadow transition-all duration-500">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            {title}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Learn More Link */}
        <Link
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-[#F7931A] mt-4 flex items-center text-sm font-medium hover:text-[#E08213] transition-colors"
        >
          <span className="mr-1">Learn more</span>
          <ArrowRight className="size-4 transition-all duration-500 group-hover:translate-x-2" />
        </Link>
      </div>

      {/* Bottom Ambient Glow Line */}
      <div className="from-[#F7931A] to-[#F7931A]/30 absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r blur-2xl transition-all duration-500 group-hover:blur-lg" />
    </motion.div>
  );
};

const items = [
  {
    title: 'Instant Continuous Settlement',
    description:
      'Sub-second micro-settlements execute continuously over Lightning channels as market prices move. No margin calls or manual intervention.',
    icon: <Zap className="size-6" />,
    href: '#content-6',
    size: 'large' as const,
  },
  {
    title: '100% Self-Custodial',
    description:
      'Your keys, your bitcoin. No central banks, no custodial lockups, and zero counterparty insolvency risk at any point in the payment flow.',
    icon: <Shield className="size-6" />,
    href: '#faqs-2',
    size: 'small' as const,
  },
  {
    title: 'No Tokens or Synthetic Assets',
    description:
      'Eliminates algorithmic tokens, bridge contracts, and fiat reserve audits. Dollar stability is achieved entirely with native Bitcoin.',
    icon: <CreditCard className="size-6" />,
    href: '#live-ticker',
    size: 'medium' as const,
  },
  {
    title: 'Dual-Sided Risk Balancing',
    description:
      'Counterparties balance risk and return in real time, locking USD purchasing power on one side while providing leverage on the other.',
    icon: <BarChart3 className="size-6" />,
    href: '#reviews-2',
    size: 'medium' as const,
  },
  {
    title: 'Built on Lightning Dev Kit (LDK)',
    description:
      'Engineered directly on LDK with embedded node lifecycle management, background sync, and state persistence.',
    icon: <Brain className="size-6" />,
    href: siteConfig.githubUrl,
    size: 'small' as const,
  },
  {
    title: '100% Open Source (GPLv3)',
    description:
      'Complete transparency with all source code publicly available under the open-source GPLv3 license on GitHub.',
    icon: <FileCode className="size-6" />,
    href: siteConfig.licenseUrl,
    size: 'large' as const,
  },
];

export function BentoGrid() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            href={item.href}
            size={item.size}
            className={cn(
              item.size === 'large'
                ? 'col-span-1 sm:col-span-2 md:col-span-4'
                : item.size === 'medium'
                  ? 'col-span-1 sm:col-span-1 md:col-span-3'
                  : 'col-span-1 sm:col-span-1 md:col-span-2',
              'h-full',
            )}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default BentoGrid;
