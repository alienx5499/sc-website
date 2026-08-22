'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { CornerDownLeft, Zap, FileText, Lock, Heart } from 'lucide-react';
import { GithubIcon, TwitterIcon } from '@/components/ui/Icons';
import { Badge } from '@/components/ui/badge';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { SparklesCore } from '@/components/ui/sparkles';
import { siteConfig } from '@/data/siteConfig';

// Color palette for ASCII logo animation
const asciiColors = [
  'rgba(255, 255, 255, 0.9)', // white
  'rgba(245, 158, 11, 0.9)', // amber
  'rgba(234, 179, 8, 0.9)', // gold
  'rgba(217, 119, 6, 0.9)', // orange
  'rgba(255, 255, 255, 0.9)', // back to white
];

// ASCII Logo Component with Random Character Animation
function AnimatedAsciiLogo() {
  const baseAscii = `                                  ***                       
                          **    ***                         
                           ******                           
                                                            
                  ************************                  
                  **                    **                  
                  **  ***************   **                  
                  **  **         ****   **                  
                  **            **      **                  
                  **         ***        **                  
                  **       ***      **  **                  
                  **     ***        **  **                  
                   **  ***        ***  **                   
                    **    ***  ****   **                    
                      ***    **    ***                      
                         ***    ***                         
                            ****`;

  const charSet = "!@#$%^&*()~`_+-=[]{}|;:',.<>?/";
  const [asciiArt, setAsciiArt] = useState(baseAscii);
  const [colorIndex, setColorIndex] = useState(0);
  const [glowIntensity, setGlowIntensity] = useState(0.5);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const randomizeChars = () => {
      const lines = baseAscii.split('\n');
      const randomized = lines
        .map((line) =>
          line
            .split('')
            .map((char) => {
              if (char !== ' ') {
                if (Math.random() < 0.3) {
                  return charSet[Math.floor(Math.random() * charSet.length)];
                }
              }
              return char;
            })
            .join('')
        )
        .join('\n');
      setAsciiArt(randomized);
    };

    randomizeChars();
    const interval = setInterval(() => {
      randomizeChars();
    }, 300 + Math.random() * 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % asciiColors.length);
    }, 2000 + Math.random() * 2000);

    return () => clearInterval(colorInterval);
  }, []);

  useEffect(() => {
    const glowInterval = setInterval(() => {
      setGlowIntensity((prev) => (prev >= 0.7 ? 0.3 : prev + 0.05));
    }, 100);

    return () => clearInterval(glowInterval);
  }, []);

  useEffect(() => {
    const scaleInterval = setInterval(() => {
      setScale((prev) => (prev >= 1.02 ? 0.98 : prev + 0.002));
    }, 50);

    return () => clearInterval(scaleInterval);
  }, []);

  const currentColor = asciiColors[colorIndex];
  const [r, g, b] = currentColor
    .match(/\d+/g)
    ?.slice(0, 3)
    .map(Number) || [255, 255, 255];

  return (
    <pre
      className="text-[10px] xl:text-[13px] font-mono whitespace-pre select-none"
      style={{
        fontFamily: 'monospace',
        letterSpacing: '0.15px',
        lineHeight: '1.2',
        color: currentColor,
        transition:
          'color 2.5s ease-in-out, transform 0.1s ease-out, filter 0.1s ease-out',
        transform: `scale(${scale})`,
        filter: `drop-shadow(0 0 ${glowIntensity * 8}px rgba(${r}, ${g}, ${b}, ${glowIntensity})) 
                 drop-shadow(0 0 ${glowIntensity * 4}px rgba(${r}, ${g}, ${b}, ${glowIntensity * 0.6}))`,
        textShadow: `0 0 ${glowIntensity * 6}px rgba(${r}, ${g}, ${b}, ${glowIntensity * 0.8})`,
      }}
    >
      {asciiArt}
    </pre>
  );
}

// Top Footer Section with CTA
function FooterCTA() {
  return (
    <div className="relative w-full min-h-[19rem] md:h-[20rem] rounded-[1.25rem] border-[0.75px] border-gray-800 p-2 md:rounded-[1.5rem] md:p-3">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      <div className="relative overflow-hidden rounded-xl border-[0.75px] border-gray-800 bg-black w-full h-full">
        {/* Animated Background gradient with amber/gold/orange */}
        <div className="absolute inset-0 w-full h-full">
          <motion.div
            className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full opacity-30 blur-[120px]"
            style={{
              background: `radial-gradient(circle at center, #f59e0b, transparent 70%)`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full opacity-20 blur-[100px]"
            style={{
              background: `radial-gradient(circle at center, #d97706, transparent 70%)`,
            }}
            animate={{
              x: [0, -20, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[200px] w-[200px] rounded-full opacity-15 blur-[80px]"
            style={{
              background: `radial-gradient(circle at center, #eab308, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />
        </div>

        {/* Sparkles effect */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <SparklesCore
            id="footer-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={100}
            className="absolute inset-0 w-full h-full"
            particleColor="#f59e0b"
          />
        </div>

        {/* Logo positioned in top right */}
        <div className="absolute right-0 xl:right-0 md:flex hidden top-4 xl:top-6 bottom-4 xl:bottom-6 left-auto items-center justify-center p-2 xl:p-3">
          <div className="flex items-center justify-center h-full">
            <AnimatedAsciiLogo />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-start px-4 md:px-8 pt-4 pb-6 justify-between sm:justify-center h-full">
          <div className="relative flex flex-col items-start justify-start max-w-xl">
            <p className="tracking-tight font-semibold text-xl md:text-3xl text-left bg-clip-text text-transparent bg-gradient-to-b from-white via-amber-100 to-amber-200">
              Ready to experience dollar stability on Bitcoin?
            </p>
            <p className="text-sm pt-3 text-neutral-300 max-w-lg text-left leading-relaxed">
              Get instant USD stability without banks, tokens, or third-party custody. Continuous settlement powered directly by Lightning Network smart contracts.
            </p>
          </div>

          <motion.div
            className="w-full flex flex-row md:gap-4 gap-2 flex-wrap md:justify-start justify-center items-stretch md:items-start mt-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
          >
            <Link
              className="w-full md:w-52 h-12 text-black font-bold relative isolate inline-flex items-center justify-center overflow-hidden rounded-md px-3 text-left text-sm bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:via-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/50 hover:shadow-xl hover:shadow-amber-500/70 group gap-2"
              href={siteConfig.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download App</span>
              <Badge className="bg-black/20 p-1 text-black transition-all duration-200 ease-in-out group-hover:shadow-xl shadow-background/70 border-transparent">
                <CornerDownLeft className="size-4" />
              </Badge>
            </Link>

            <Link
              className="w-full md:w-52 h-12 text-white border border-amber-500/50 bg-black/50 hover:bg-amber-500/10 hover:border-amber-500 hover:text-white relative isolate inline-flex items-center justify-center overflow-hidden rounded-md px-3 text-left text-sm font-medium transition-all duration-300 group gap-2"
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-white group-hover:text-white z-10">GitHub</span>
              <Badge className="bg-amber-500/30 text-white border-amber-500/50 transition-all duration-200 group-hover:shadow-xl group-hover:bg-amber-500/50 shadow-white/70 z-10">
                <GithubIcon className="size-4" />
              </Badge>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Main Footer Component
export function Footer() {
  return (
    <div className="relative w-full rounded-3xl border-[0.75px] border-gray-800 p-2">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      <footer className="relative overflow-hidden rounded-3xl border-[0.75px] border-gray-800 bg-black w-full">
        <div className="p-4">
          <FooterCTA />
        </div>
        <div className="pt-12 pb-2 md:pb-12 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Top Section */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {/* Logo and Description */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-2.5 mb-4">
                  <Image
                    src="/images/app-icon.svg"
                    alt={siteConfig.name}
                    width={36}
                    height={36}
                    className="rounded-lg"
                  />
                  <span className="text-xl font-bold text-white tracking-tight">
                    {siteConfig.name}
                  </span>
                </div>
                <p className="text-sm text-neutral-300 mb-4 leading-relaxed">
                  Self-custodial USD stability on Bitcoin Lightning. No banks, no synthetic tokens, and zero custody risk.
                </p>
                <div className="flex gap-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={siteConfig.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-amber-500/10 border border-transparent hover:border-amber-500/50 transition-all inline-flex items-center justify-center"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="https://x.com/alienx5499"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-amber-500/10 border border-transparent hover:border-amber-500/50 transition-all inline-flex items-center justify-center"
                      aria-label="Twitter / X"
                    >
                      <TwitterIcon className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Protocol */}
              <div>
                <h4 className="font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-200 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-amber-400" />
                  Protocol
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="#services-1"
                      className="text-neutral-400 hover:text-amber-400 transition-colors duration-200 inline-block relative group"
                    >
                      Architecture &amp; Pillars
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-full" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#content-1"
                      className="text-neutral-400 hover:text-amber-400 transition-colors duration-200 inline-block relative group"
                    >
                      How It Works
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-full" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#content-6"
                      className="text-neutral-400 hover:text-amber-400 transition-colors duration-200 inline-block relative group"
                    >
                      Continuous Settlement
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-full" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#get-started"
                      className="text-neutral-400 hover:text-amber-400 transition-colors duration-200 inline-block relative group"
                    >
                      Get Started
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-400 transition-all duration-200 group-hover:w-full" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-200 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-amber-300" />
                  Resources
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href={siteConfig.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-amber-300 transition-colors duration-200 inline-block relative group"
                    >
                      GitHub Repository
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-300 transition-all duration-200 group-hover:w-full" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#reviews-2"
                      className="text-neutral-400 hover:text-amber-300 transition-colors duration-200 inline-block relative group"
                    >
                      Technical Docs &amp; Demos
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-300 transition-all duration-200 group-hover:w-full" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.releasesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-amber-300 transition-colors duration-200 inline-block relative group"
                    >
                      Release Binaries
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-300 transition-all duration-200 group-hover:w-full" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faqs-2"
                      className="text-neutral-400 hover:text-amber-300 transition-colors duration-200 inline-block relative group"
                    >
                      Knowledge Base FAQ
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-300 transition-all duration-200 group-hover:w-full" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-amber-400 flex items-center gap-2">
                  <Lock className="h-4 w-4 text-yellow-200" />
                  Legal
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-neutral-400 hover:text-amber-300 transition-colors duration-200 inline-block relative group"
                    >
                      Privacy Policy &amp; Terms
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-300 transition-all duration-200 group-hover:w-full" />
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://github.com/toneloc/stable-channels/blob/main/LICENSE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-amber-300 transition-colors duration-200 inline-block relative group"
                    >
                      MIT License
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-300 transition-all duration-200 group-hover:w-full" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.contactFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-amber-300 transition-colors duration-200 inline-block relative group"
                    >
                      Contact Inquiries
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-amber-300 transition-all duration-200 group-hover:w-full" />
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Bottom Section */}
            <div className="border-t border-gray-800/50 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-neutral-500 leading-relaxed max-w-2xl text-left">
                  Stable Channels is self-custodial open-source software: your keys and funds remain on your own device at all times. Neither Stable Channels nor any third party ever takes custody of them.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <p className="text-sm text-neutral-400 whitespace-nowrap">
                    © {siteConfig.year} {siteConfig.name}. Made with{' '}
                    <Heart className="inline h-3 w-3 text-amber-500 fill-current animate-pulse" />{' '}
                    for Bitcoiners by{' '}
                    <a
                      href="https://github.com/alienx5499"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Visit GitHub"
                      className="text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-2"
                    >
                      @alienx5499
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
