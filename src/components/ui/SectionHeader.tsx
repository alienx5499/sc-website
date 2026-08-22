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
  isDark = true,
  className = '',
}) => {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClass} ${className}`}>
      {badge && (
        <span
          className="inline-block text-xs font-bold uppercase tracking-widest mb-3 text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full"
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 ${
          isDark ? 'text-white' : 'text-zinc-900 dark:text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-zinc-400' : 'text-zinc-600 dark:text-zinc-400'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
