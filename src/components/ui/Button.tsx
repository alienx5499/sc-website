import React from 'react';
import Link from 'next/link';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'light' | 'outline' | 'dark';
  href?: string;
  isExternal?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  isExternal = false,
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold text-sm rounded-xl px-6 py-2.5 transition-all duration-200 active:scale-98 text-center';

  const variants = {
    primary:
      'bg-[#F59E0B] hover:bg-[#D97706] text-white shadow-sm hover:shadow-md hover:-translate-y-0.5',
    light:
      'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200/60 shadow-sm',
    outline:
      'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50',
    dark: 'bg-gray-900 hover:bg-gray-800 text-white shadow-sm hover:shadow-md',
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const combinedClassName = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`.trim();

  if (href) {
    if (isExternal || href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
