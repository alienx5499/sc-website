import React from 'react';
import {
  ShieldCheck,
  Zap,
  Layers,
  Cpu,
  Scale,
  GitBranch,
} from 'lucide-react';
import { BentoItem } from '@/types/bento';
import { siteConfig } from './siteConfig';

export const bentoFeaturesData: BentoItem[] = [
  {
    id: 'self-custody',
    title: '100% Self-Custodial',
    description:
      'Your keys, your bitcoin. No central banks, no custodial lockups, and no third-party insolvency risk at any point in the payment flow.',
    icon: <ShieldCheck className="w-6 h-6" />,
    size: 'large',
    badge: 'Core Principle',
    actionText: 'Learn about custody',
    actionHref: '#faqs-2',
  },
  {
    id: 'continuous-settlement',
    title: 'Instant Continuous Settlement',
    description:
      'Sub-second micro-settlements execute continuously over Lightning channels as market prices move.',
    icon: <Zap className="w-6 h-6" />,
    size: 'small',
    badge: 'Lightning Speed',
    actionText: 'How it works',
    actionHref: '#content-6',
  },
  {
    id: 'no-tokens',
    title: 'No Tokens or Synthetic Assets',
    description:
      'Eliminates algorithmic tokens, bridge contracts, and fiat reserve audits. Dollar stability is achieved entirely with native Bitcoin.',
    icon: <Layers className="w-6 h-6" />,
    size: 'medium',
    badge: 'Native Bitcoin',
    actionText: 'Read documentation',
    actionHref: '#content-2',
  },
  {
    id: 'ldk-engine',
    title: 'Built on Lightning Dev Kit (LDK)',
    description:
      'Engineered directly on LDK with embedded node lifecycle management, background sync, and state persistence.',
    icon: <Cpu className="w-6 h-6" />,
    size: 'medium',
    badge: 'Enterprise Architecture',
    actionText: 'View architecture',
    actionHref: siteConfig.githubUrl,
  },
  {
    id: 'stability-arbitrage',
    title: 'Dual-Sided Stability',
    description:
      'Counterparties balance risk and return in real time, locking USD purchasing power on one side while providing leverage on the other.',
    icon: <Scale className="w-6 h-6" />,
    size: 'small',
    badge: 'Market Equilibrium',
    actionText: 'Explore economics',
    actionHref: '#reviews-2',
  },
  {
    id: 'open-source',
    title: '100% Open Source & Auditable',
    description:
      'Complete transparency with all source code publicly available under the open-source MIT license on GitHub.',
    icon: <GitBranch className="w-6 h-6" />,
    size: 'large',
    badge: 'Open Source',
    actionText: 'Explore GitHub',
    actionHref: siteConfig.githubUrl,
  },
];
