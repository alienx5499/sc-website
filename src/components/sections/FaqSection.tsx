'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FaqAccordion } from '@/components/ui/faq-accordion';
import { faqsData } from '@/data/faqs';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const FaqSection: React.FC = () => {
  return (
    <section id="faqs-2" data-section="faqs-2" className="py-24 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800/80 transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#F7931A]/5 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <AnimatedSection>
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about Bitcoin USD stability, risk management, and the Lightning Network."
            className="mb-12"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <FaqAccordion items={faqsData} defaultOpenIndex={0} />
        </AnimatedSection>
      </Container>
    </section>
  );
};
