'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { BentoItem, BentoGridProps, BentoGridItemProps } from '@/types/bento';
import { cn } from '@/lib/utils';

export const BentoCard: React.FC<BentoGridItemProps> = ({ item, className }) => {
  const isExternal = item.actionHref?.startsWith('http');
  const sizeClasses =
    item.size === 'large'
      ? 'md:col-span-4'
      : item.size === 'medium'
        ? 'md:col-span-3'
        : 'md:col-span-2';

  const cardContent = (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: 'spring', damping: 25, stiffness: 200 },
        },
      }}
      className={cn(
        'group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white dark:bg-zinc-950/60 backdrop-blur-md p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-500 cursor-pointer',
        sizeClasses,
        className
      )}
    >
      {/* Background Subtle Grid Pattern */}
      <div className="absolute top-0 -right-1/2 z-0 size-full pointer-events-none bg-[linear-gradient(to_right,#f59e0b0d_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b0d_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#f59e0b15_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b15_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]" />

      {/* Giant Watermarked Background Icon */}
      <div className="text-zinc-900/5 dark:text-amber-500/5 group-hover:text-amber-500/10 dark:group-hover:text-amber-500/15 absolute right-2 bottom-4 scale-[5.5] transition-all duration-700 group-hover:scale-[6] pointer-events-none origin-bottom-right">
        {item.icon}
      </div>

      {/* Card Body */}
      <div className="relative z-10 flex h-full flex-col justify-between space-y-6">
        <div>
          {/* Icon Badge & Pill */}
          <div className="flex items-center justify-between gap-3 mb-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 shadow-sm group-hover:bg-amber-500/20 group-hover:scale-105 transition-all duration-300">
              {item.icon}
            </div>
            {item.badge && (
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800">
                {item.badge}
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2.5 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Action Link / Hover Arrow */}
        {item.actionText && item.actionHref && (
          <div className="pt-2 flex items-center text-sm font-semibold text-amber-600 dark:text-amber-400 group-hover:text-amber-500">
            <span className="mr-1.5">{item.actionText}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </div>
        )}
      </div>

      {/* Ambient Bottom Glow Gradient */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
    </motion.div>
  );

  if (item.actionHref) {
    if (isExternal) {
      return (
        <a
          href={item.actionHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn('block h-full', sizeClasses)}
        >
          {cardContent}
        </a>
      );
    }
    return (
      <Link href={item.actionHref} className={cn('block h-full', sizeClasses)}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export const BentoGrid: React.FC<BentoGridProps> = ({ items, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
          },
        },
      }}
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 gap-5 sm:gap-6 auto-rows-[minmax(220px,auto)]',
        className
      )}
    >
      {items.map((item) => (
        <BentoCard key={item.id} item={item} />
      ))}
    </motion.div>
  );
};
