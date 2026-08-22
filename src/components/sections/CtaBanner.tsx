import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { GooglePlayButton, AppStoreButton } from '@/components/base/buttons/app-store-buttons';
import { siteConfig } from '@/data/siteConfig';

export const CtaBanner: React.FC = () => {
  return (
    <section id="cta-1" className="py-20 bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-800/80 relative overflow-hidden transition-colors duration-300">
      <Container>
        <div className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 rounded-3xl bg-white dark:bg-gradient-to-r dark:from-zinc-900 dark:via-zinc-900/90 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-2xl dark:shadow-black/80">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Ready to try it?
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              Download the app and get set up in minutes.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
            <GooglePlayButton
              href={siteConfig.googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              className="hover:scale-105 transition-transform shadow-xs"
            />
            <AppStoreButton
              href={siteConfig.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              className="hover:scale-105 transition-transform opacity-90 hover:opacity-100 shadow-xs"
            />
            <Button
              variant="primary"
              href={siteConfig.releasesUrl}
              isExternal
              className="text-sm px-6 py-2.5"
            >
              Desktop Releases
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
