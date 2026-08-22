import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { resourcesData } from '@/data/resources';

export const ResourcesSection: React.FC = () => {
  return (
    <section
      id="reviews-2"
      data-section="reviews-2"
      className="py-24 bg-zinc-50/70 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800/80 transition-colors duration-300"
    >
      <Container>
        <SectionHeader
          title="Links and Resources"
          subtitle="Resources, demos, and technical deep dives to learn more about Stable Channels."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourcesData.map((res) => (
            <div
              key={res.id}
              className="p-7 rounded-2xl bg-white dark:bg-zinc-900/40 backdrop-blur-sm border border-zinc-200/80 dark:border-zinc-800/80 hover:border-[#F7931A]/40 dark:hover:border-[#F7931A]/40 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between shadow-xs group"
            >
              <div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-[#E08213] dark:group-hover:text-[#F7931A] transition-colors">
                  {res.title}
                </h3>
                <a
                  href={res.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E08213] dark:text-[#F7931A] hover:underline mb-3"
                >
                  <span>{res.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {res.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
