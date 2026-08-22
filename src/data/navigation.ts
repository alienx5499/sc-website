import { NavItem, AppDownloadLink } from '@/types/content';
import { siteConfig } from './siteConfig';

export const mainNavItems: NavItem[] = [
  { label: 'Benefits', href: '#services-1' },
  { label: 'Features', href: '#content-1' },
  { label: 'Get Started', href: '#get-started' },
  { label: 'Links and Resources', href: '#reviews-2' },
  { label: 'FAQs', href: '#faqs-2' },
];

export const footerNavItems: NavItem[] = [
  { label: 'Home', href: '#hero-2' },
  { label: 'Benefits', href: '#services-1' },
  { label: 'Features', href: '#content-1' },
  { label: 'Links and Resources', href: '#reviews-2' },
  { label: 'FAQs', href: '#faqs-2' },
  { label: 'Privacy Policy', href: '/privacy' },
];

export const appDownloadLinks: AppDownloadLink[] = [
  {
    label: 'iOS',
    subtitle: 'Coming Soon',
    href: siteConfig.releasesUrl,
    iconName: 'apple',
  },
  {
    label: 'Android',
    subtitle: 'Google Play',
    href: siteConfig.googlePlayUrl,
    iconName: 'android',
  },
  {
    label: 'Desktop',
    href: siteConfig.releasesUrl,
    iconName: 'desktop',
  },
];
