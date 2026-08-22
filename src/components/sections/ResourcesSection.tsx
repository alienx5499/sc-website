'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, FileText, Mic, MessageCircle, Code, Send, Video } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { resourcesData } from '@/data/resources';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

const getIcon = (id: string) => {
  if (id.includes('demo') || id.includes('conf')) return <Video className="w-5 h-5 sm:w-6 sm:h-6" />;
  if (id.includes('podcast') || id.includes('livera')) return <Mic className="w-5 h-5 sm:w-6 sm:h-6" />;
  if (id.includes('twitter')) return <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />;
  if (id.includes('github')) return <Code className="w-5 h-5 sm:w-6 sm:h-6" />;
  if (id.includes('telegram')) return <Send className="w-5 h-5 sm:w-6 sm:h-6" />;
  return <FileText className="w-5 h-5 sm:w-6 sm:h-6" />;
};

const getSpanClass = (index: number) => {
  switch (index) {
    case 0: return 'md:col-span-2 lg:col-span-2'; // Tech Deep Dive
    case 1: return 'col-span-1 md:col-span-1'; // Podcast
    case 2: return 'col-span-1 md:col-span-1'; // Twitter
    case 3: return 'col-span-1 md:col-span-1'; // Demo eCash
    case 4: return 'col-span-1 md:col-span-1'; // Demo Frontend
    case 5: return 'md:col-span-2 lg:col-span-2'; // Atlantis Conf
    case 6: return 'md:col-span-2 lg:col-span-2'; // GitHub
    case 7: return 'md:col-span-2 lg:col-span-2'; // Telegram
    default: return 'col-span-1';
  }
};

export const ResourcesSection: React.FC = () => {
  return (
    <section
      id="reviews-2"
      data-section="reviews-2"
      className="py-24 bg-zinc-50/70 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800/80 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Noise overlay and ambient glow */}
      <div className="noise-overlay absolute inset-0 pointer-events-none dark:block hidden" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-[#F7931A]/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <AnimatedSection>
          <SectionHeader
            title="Links and Resources"
            subtitle="Explore demos, deep dives, and technical specifications to understand how Stable Channels achieves native Bitcoin stability."
            className="mb-16"
          />
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {resourcesData.map((res, index) => (
            <motion.a
              key={res.id}
              custom={index}
              variants={cardVariants}
              href={res.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 hover:border-[#F7931A]/40 dark:hover:border-[#F7931A]/40 transition-all duration-500 shadow-sm hover:shadow-md dark:shadow-none ${getSpanClass(index)}`}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F7931A]/0 to-[#F7931A]/0 group-hover:from-[#F7931A]/5 group-hover:to-transparent transition-colors duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-hover:text-[#F7931A] group-hover:scale-110 group-hover:bg-[#F7931A]/10 group-hover:border-[#F7931A]/20 transition-all duration-300">
                    {getIcon(res.id)}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-zinc-100/50 dark:bg-zinc-800/50 flex items-center justify-center opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300">
                    <ExternalLink className="w-4 h-4 text-[#C6720D] dark:text-[#F7931A]" />
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="text-sm font-semibold tracking-wider text-[#C6720D] dark:text-[#F7931A]/90 uppercase mb-2">
                    {res.title}
                  </h3>
                  <h4 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-[#F7931A] transition-colors duration-300">
                    {res.linkText}
                  </h4>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                    {res.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
