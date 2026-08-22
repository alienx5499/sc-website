import React from 'react';

export type BentoSize = 'small' | 'medium' | 'large';

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  size: BentoSize;
  badge?: string;
  actionText?: string;
  actionHref?: string;
}

export interface BentoGridItemProps {
  item: BentoItem;
  className?: string;
}

export interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}
