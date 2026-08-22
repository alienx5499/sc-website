import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GooglePlayButton, AppStoreButton } from '@/components/base/buttons/app-store-buttons';
import { getStartedSteps } from '@/data/getStarted';
import { siteConfig } from '@/data/siteConfig';

export const GetStartedSection: React.FC = () => {
  return (
    <section id="get-started" className="py-24 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800/80 transition-colors duration-300">
      <Container>
        <SectionHeader
          badge="Get Started"
          title="Up and running in minutes"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {getStartedSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="p-8 rounded-3xl bg-zinc-50/70 dark:bg-zinc-900/40 backdrop-blur-sm border border-zinc-200/80 dark:border-zinc-800/80 hover:border-amber-500/40 dark:hover:border-amber-500/40 hover:bg-white dark:hover:bg-zinc-900/80 hover:-translate-y-1.5 transition-all duration-300 text-center flex flex-col items-center shadow-xs group"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 flex items-center justify-center font-extrabold text-3xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
                {step.stepNumber}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                {step.stepNumber === 1 ? (
                  <>
                    Download the app on Google Play or grab the latest desktop binaries. iOS TestFlight builds in active testing.
                  </>
                ) : (
                  step.description
                )}
              </p>

              {step.stepNumber === 1 && (
                <div className="mt-auto flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                  <GooglePlayButton
                    href={siteConfig.googlePlayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="md"
                    className="hover:scale-105 transition-transform"
                  />
                  <AppStoreButton
                    href={siteConfig.releasesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="md"
                    className="hover:scale-105 transition-transform opacity-90"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
