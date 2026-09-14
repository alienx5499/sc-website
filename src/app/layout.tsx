import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/data/siteConfig';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    'Bitcoin',
    'Lightning',
    'Stable Channels',
    'Lightning Network',
    'USD',
    'Self-Custodial',
    'Volatility Management',
    'Exposure Management',
  ],
  authors: [{ name: siteConfig.name }],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/images/app-icon.svg',
    apple: '/images/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth bg-black text-white dark"
      style={{ backgroundColor: '#000000' }}
    >
      <body
        className="font-sans antialiased text-zinc-100 bg-black selection:bg-[#F7931A]/20 selection:text-[#F7931A]"
        style={{ backgroundColor: '#000000' }}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
