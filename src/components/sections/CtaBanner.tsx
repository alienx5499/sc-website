import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';

export const CtaBanner: React.FC = () => {
  return (
    <section id="cta-1" className="py-20 bg-gray-50 border-t border-gray-200/80">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 rounded-3xl bg-white border border-gray-200/90 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Ready to try it?
            </h2>
            <p className="text-base text-gray-600">
              Download the app and get set up in minutes.
            </p>
          </div>
          <div className="flex-shrink-0">
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
