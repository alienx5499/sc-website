import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { getStartedSteps } from '@/data/getStarted';

export const GetStartedSection: React.FC = () => {
  return (
    <section id="get-started" className="py-24 bg-white">
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
              className="p-8 rounded-3xl bg-white border border-gray-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-3xl mb-6 shadow-inner">
                {step.stepNumber}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {step.stepNumber === 1 ? (
                  <>
                    Get the Android app on{' '}
                    <a
                      href="https://play.google.com/store/apps/details?id=com.stablechannels.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Google Play
                    </a>
                    , or download the desktop app from our{' '}
                    <a
                      href="https://github.com/toneloc/stable-channels/releases"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      releases page
                    </a>
                    . iOS coming soon.
                  </>
                ) : (
                  step.description
                )}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
