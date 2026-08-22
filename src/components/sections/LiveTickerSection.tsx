'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TextFlippingBoard } from '@/components/ui/text-flipping-board';
import { Zap, ShieldCheck, RefreshCw } from 'lucide-react';

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
      className="py-24 bg-zinc-900 dark:bg-black text-white relative overflow-hidden border-b border-zinc-800 transition-colors duration-300"
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

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 text-left">
            <div className="p-5 rounded-2xl bg-zinc-850/70 dark:bg-zinc-950/80 border border-zinc-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#F7931A]/10 border border-[#F7931A]/30 flex items-center justify-center text-[#F7931A]">
                <RefreshCw className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-base">Continuous Micro-Settlement</h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Balances adjust dynamically on state transitions without triggering chain fees or margin calls.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-850/70 dark:bg-zinc-950/80 border border-zinc-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#F7931A]/10 border border-[#F7931A]/30 flex items-center justify-center text-[#F7931A]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-base">Zero Counterparty Risk</h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Funds are held in user-controlled 2-of-2 Lightning multisig channels, completely off centralized exchanges.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-850/70 dark:bg-zinc-950/80 border border-zinc-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#F7931A]/10 border border-[#F7931A]/30 flex items-center justify-center text-[#F7931A]">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-base">Native Bitcoin Peg</h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                USD purchasing power backed directly by Bitcoin reserves - no fiat bank accounts or synthetic tokens required.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
