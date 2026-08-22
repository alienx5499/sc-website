import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FaqAccordion } from '@/components/ui/faq-accordion';
import { faqsData } from '@/data/faqs';

export const FaqSection: React.FC = () => {
  return (
    <section id="faqs-2" className="py-24 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800/80 transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader
          badge="Knowledge Base"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Bitcoin USD stability, risk management, and the Lightning Network."
          className="mb-12"
        />

        <FaqAccordion items={faqsData} defaultOpenIndex={0} />
      </Container>
    </section>
  );
};
