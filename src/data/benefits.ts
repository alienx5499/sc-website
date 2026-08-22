import { BenefitItem } from '@/types/content';

export const benefitsData: BenefitItem[] = [
  {
    id: 'usd-stability',
    title: 'USD Stability',
    description: 'Your dollar balance stays constant, even as Bitcoin moves.',
    iconSrc: '/images/time.png',
  },
  {
    id: 'self-custodial',
    title: 'Self-Custodial',
    description: 'Your keys never leave your device.',
    iconSrc: '/images/graphic-design.png',
  },
  {
    id: 'exposure-management',
    title: 'Exposure Management',
    description: 'Slide between USD stability and BTC exposure instantly.',
    iconSrc: '/images/startup.png',
  },
  {
    id: 'open-source',
    title: 'Open Source',
    description: 'Fully open source on the Bitcoin Lightning Network.',
    iconSrc: '/images/chat-2.png',
  },
];
