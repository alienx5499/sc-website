import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { ContinuousSettlementSection } from '@/components/sections/ContinuousSettlementSection';
import { TheOpportunitySection } from '@/components/sections/TheOpportunitySection';
import { GetStartedSection } from '@/components/sections/GetStartedSection';
import { ResourcesSection } from '@/components/sections/ResourcesSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaBanner } from '@/components/sections/CtaBanner';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 flex flex-col justify-between selection:bg-amber-500/20 selection:text-amber-500 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <ContinuousSettlementSection />
        <TheOpportunitySection />
        <GetStartedSection />
        <ResourcesSection />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
