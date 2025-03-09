import React from 'react';
import useSWR from 'swr';
import { Block } from '../types';
import { Bitcoin } from 'lucide-react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function BlockExplorer() {
  const { data: blocks, error } = useSWR<Block[]>(
    'https://mempool.space/api/v1/blocks',
    fetcher,
    { refreshInterval: 10000 }
  );

  if (error) return <div>Failed to load blocks</div>;
  if (!blocks) return <div>Loading...</div>;

  return (
    <section className="rounded-xl bg-gray-900 p-6">
      <h2 className="flex items-center text-2xl font-bold text-white">
        <Bitcoin className="mr-2 text-orange-500" />
        Latest Blocks
      </h2>
      <div className="mt-4 space-y-4">
        {blocks.slice(0, 5).map((block) => (
          <div
            key={block.height}
            className="flex items-center justify-between rounded-lg bg-gray-800 p-4 transition hover:bg-gray-700"
          >
            <div>
              <div className="text-lg font-medium text-white">
                Block #{block.height}
              </div>
              <div className="text-sm text-gray-400">
                {new Date(block.timestamp * 1000).toLocaleString()}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">
                {block.tx_count} transactions
              </div>
              <div className="text-sm text-gray-400">
                {(block.size / 1000000).toFixed(2)} MB
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}