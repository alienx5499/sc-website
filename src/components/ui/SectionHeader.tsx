import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  isDark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClass} ${className}`}>
      {badge && (
        <span
          className="inline-block text-xs font-bold uppercase tracking-widest mb-3 text-[#E08213] dark:text-[#F7931A] bg-[#F7931A]/10 border border-[#F7931A]/20 px-3.5 py-1 rounded-full"
        >
          {badge}
        </span>
      )}
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-white"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
