'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TextFlippingBoard } from '@/components/ui/text-flipping-board';

const SETTLEMENT_MESSAGES: string[] = [
  'BTC VOLATILITY: HIGH\nUSD BALANCE: $100.00\nSETTLED CONTINUOUSLY',
  'PEER TO PEER MONEY\nZERO COUNTERPARTY\n100% LIGHTNING NATIVE',
  'NO SYNTHETIC TOKENS\nNO CENTRAL BANK\nSELF CUSTODIAL DOLLAR',
  'INSTANT REBALANCING\nMICRO TRANSACTIONS\nSATOSHI BACKED VALUE',
];

export const LiveTickerSection: React.FC = () => {
  const [msgIdx, setMsgIdx] = useState(0);

  const nextMessage = useCallback(() => {
    setMsgIdx((prev) => (prev + 1) % SETTLEMENT_MESSAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextMessage, 5500);
    return () => clearInterval(timer);
  }, [nextMessage]);

  return (
    <section
      id="live-ticker"
      data-section="live-ticker"
      className="py-24 bg-white dark:bg-black text-zinc-900 dark:text-white relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#F7931A]/10 blur-[130px] rounded-full pointer-events-none" />

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto space-y-10 text-center">
          <SectionHeader
            badge="Real-Time Stability Engine"
            title="Continuous Settlement in Motion"
            subtitle="Unlike traditional stablecoins or margin exchanges that rely on periodic audits and centralized liquidation cascades, Stable Channels continuously updates channel state across the Lightning Network."
            align="center"
          />

          {/* Split-Flap Ticker Board */}
          <div className="relative pt-2">
            <TextFlippingBoard text={SETTLEMENT_MESSAGES[msgIdx]} duration={1.1} />
          </div>
        </div>
      </Container>
    </section>
  );
};
