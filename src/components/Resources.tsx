import React from 'react';
import { BookOpen, Code, FileText } from 'lucide-react';

const resources = [
  {
    title: 'Bitcoin Core',
    description: 'The reference implementation of Bitcoin protocol',
    icon: Code,
    url: 'https://github.com/bitcoin/bitcoin',
  },
  {
    title: 'Bitcoin Development Documentation',
    description: 'Comprehensive guide to Bitcoin development',
    icon: FileText,
    url: 'https://developer.bitcoin.org/',
  },
  {
    title: 'Bitcoin Optech',
    description: 'Technical resources for Bitcoin professionals',
    icon: BookOpen,
    url: 'https://bitcoinops.org/',
  },
];

export function Resources() {
  return (
    <section className="rounded-xl bg-gray-900 p-6">
      <h2 className="text-2xl font-bold text-white">Educational Resources</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg bg-gray-800 p-6 transition hover:bg-gray-700"
            >
              <Icon className="h-8 w-8 text-orange-500" />
              <h3 className="mt-4 text-lg font-medium text-white">
                {resource.title}
              </h3>
              <p className="mt-2 text-gray-400">{resource.description}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}