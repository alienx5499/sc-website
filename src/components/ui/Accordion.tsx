'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '@/types/content';

interface AccordionProps {
  items: FaqItem[];
  defaultOpenId?: string;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set(defaultOpenId ? [defaultOpenId] : [])
  );

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <div
            key={item.id}
            className="rounded-2xl border border-gray-200/80 bg-white shadow-xs transition-all duration-200 hover:border-gray-300"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg pr-4">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-blue-600' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100">
                <p>{item.answer}</p>
                {item.linkText && item.linkHref && (
                  <p className="mt-3">
                    <a
                      href={item.linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-600 hover:text-blue-700 underline"
                    >
                      {item.linkText}
                    </a>
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
