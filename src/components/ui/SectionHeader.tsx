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
        <div className="flex items-center gap-2 mb-4" style={align === 'center' ? { justifyContent: 'center' } : {}}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F7931A]" />
          <span className="text-sm font-medium tracking-normal text-[#C6720D] dark:text-[#F7931A]/80">
            {badge}
          </span>
        </div>
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
