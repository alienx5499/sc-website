import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { resourcesData } from '@/data/resources';

export const ResourcesSection: React.FC = () => {
  return (
    <section
      id="reviews-2"
      className="py-24 bg-gray-50/60 border-t border-gray-100"
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
              className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {res.title}
                </h3>
                <a
                  href={res.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline mb-3"
                >
                  <span>{res.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-sm text-gray-600 leading-relaxed">
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
