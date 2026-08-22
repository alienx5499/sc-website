'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BentoItem } from '@/types/bento';

export interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  actionHref?: string;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  title,
  description,
  icon,
  className,
  size = 'small',
  actionHref,
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, damping: 25 },
    },
  };

  const content = (
    <motion.div
      variants={variants}
      className={cn(
        'group border-[#F7931A]/20 bg-zinc-900/60 dark:bg-zinc-950/70 hover:border-[#F7931A]/40 relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border px-6 pt-6 pb-10 shadow-md transition-all duration-500',
        className
      )}
    >
      <div className="absolute top-0 -right-1/2 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#F7931A15_1px,transparent_1px),linear-gradient(to_bottom,#F7931A15_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]" />

      <div className="text-[#F7931A]/5 group-hover:text-[#F7931A]/10 absolute right-1 bottom-3 scale-[6] transition-all duration-700 group-hover:scale-[6.2] pointer-events-none">
        {icon}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="bg-[#F7931A]/10 text-[#F7931A] shadow-[#F7931A]/10 group-hover:bg-[#F7931A]/20 group-hover:shadow-[#F7931A]/20 mb-4 flex h-12 w-12 items-center justify-center rounded-full shadow transition-all duration-500">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">
            {title}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <div className="text-[#F7931A] mt-6 flex items-center text-sm font-medium">
          <span className="mr-1">Learn more</span>
          <ArrowRight className="size-4 transition-all duration-500 group-hover:translate-x-2" />
        </div>
      </div>
      <div className="from-[#F7931A] to-[#F7931A]/30 absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r blur-2xl transition-all duration-500 group-hover:blur-lg" />
    </motion.div>
  );

  if (actionHref) {
    if (actionHref.startsWith('http')) {
      return (
        <a
          href={actionHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            size === 'large'
              ? 'col-span-1 sm:col-span-2 md:col-span-4'
              : size === 'medium'
                ? 'col-span-1 sm:col-span-1 md:col-span-3'
                : 'col-span-1 sm:col-span-1 md:col-span-2',
            'h-full block'
          )}
        >
          {content}
        </a>
      );
    }
    return (
      <a
        href={actionHref}
        className={cn(
          size === 'large'
            ? 'col-span-1 sm:col-span-2 md:col-span-4'
            : size === 'medium'
              ? 'col-span-1 sm:col-span-1 md:col-span-3'
              : 'col-span-1 sm:col-span-1 md:col-span-2',
          'h-full block'
        )}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={cn(
        size === 'large'
          ? 'col-span-1 sm:col-span-2 md:col-span-4'
          : size === 'medium'
            ? 'col-span-1 sm:col-span-1 md:col-span-3'
            : 'col-span-1 sm:col-span-1 md:col-span-2',
        'h-full'
      )}
    >
      {content}
    </div>
  );
};

export interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ items, className }) => {
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
    <motion.div
      className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {items.map((item) => (
        <BentoGridItem
          key={item.id}
          title={item.title}
          description={item.description}
          icon={item.icon}
          size={item.size}
          actionHref={item.actionHref}
        />
      ))}
    </motion.div>
  );
};
