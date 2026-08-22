import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';

export const CtaBanner: React.FC = () => {
  return (
    <section id="cta-1" className="py-20 bg-black border-t border-zinc-800/80 relative overflow-hidden">
      <Container>
        <div className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 shadow-2xl shadow-black/80">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to try it?
            </h2>
            <p className="text-base text-zinc-400">
              Download the app and get set up in minutes.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <Button
              variant="primary"
              href={siteConfig.releasesUrl}
              isExternal
              className="text-base px-8 py-3.5"
            >
              Download the App
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
