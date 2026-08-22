import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Accordion } from '@/components/ui/Accordion';
import { faqsData } from '@/data/faqs';

export const FaqSection: React.FC = () => {
  const midpoint = Math.ceil(faqsData.length / 2);
  const leftFaqs = faqsData.slice(0, midpoint);
  const rightFaqs = faqsData.slice(midpoint);

  return (
    <section id="faqs-2" className="py-24 bg-black border-t border-zinc-800/80">
      <Container>
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Common questions about Stable Channels."
          isDark
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <Accordion items={leftFaqs} defaultOpenId="faq-1" />
          <Accordion items={rightFaqs} />
        </div>
      </Container>
    </section>
  );
};
