import {
  Sparkles,
  Layers,
  BookOpen,
  HelpCircle,
  LucideIcon,
} from 'lucide-react';
import { siteConfig } from './siteConfig';

export interface MainNavItem {
  name: string;
  url: string;
  section: string;
  icon: LucideIcon;
}

export interface FooterLinkItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterSection {
  title: string;
  iconName: 'zap' | 'fileText' | 'lock';
  links: FooterLinkItem[];
}

export const mainNavItems: MainNavItem[] = [
  { name: 'Features', url: '#features', section: 'features', icon: Sparkles },
  {
    name: 'How It Works',
    url: '#content-1',
    section: 'content-1',
    icon: Layers,
  },
  {
    name: 'Resources',
    url: '#reviews-2',
    section: 'reviews-2',
    icon: BookOpen,
  },
  { name: 'FAQ', url: '#faqs-2', section: 'faqs-2', icon: HelpCircle },
];

export const footerSections: FooterSection[] = [
  {
    title: 'Product',
    iconName: 'zap',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#content-1' },
      { label: 'Continuous Settlement', href: '#content-6' },
      { label: 'Get Started', href: '#get-started' },
    ],
  },
  {
    title: 'Resources',
    iconName: 'fileText',
    links: [
      {
        label: 'GitHub Repository',
        href: siteConfig.githubUrl,
        isExternal: true,
      },
      { label: 'Documentation & Links', href: '#reviews-2' },
      { label: 'Releases', href: siteConfig.releasesUrl, isExternal: true },
      {
        label: 'Changelog',
        href: 'https://magicui.design/docs/templates/changelog',
        isExternal: true,
      },
      { label: 'FAQ', href: '#faqs-2' },
    ],
  },
  {
    title: 'Legal',
    iconName: 'lock',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/privacy' },
      { label: 'GPLv3 License', href: siteConfig.licenseUrl, isExternal: true },
    ],
  },
];
