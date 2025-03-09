import React from 'react';
import useSWR from 'swr';
import { Price } from '../types';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { DollarSign } from 'lucide-react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function PricesDashboard() {
  const { data: price, error } = useSWR<Price>(
    'https://mempool.space/api/v1/prices',
    fetcher,
    { refreshInterval: 60000 }
  );

  if (error) return <div>Failed to load prices</div>;
  if (!price) return <div>Loading...</div>;

  const data = [
    { name: 'USD', value: price.USD },
    { name: 'EUR', value: price.EUR },
    { name: 'GBP', value: price.GBP },
  ];

  return (
    <section className="rounded-xl bg-gray-900 p-6">
      <h2 className="flex items-center text-2xl font-bold text-white">
        <DollarSign className="mr-2 text-green-500" />
        Bitcoin Price
      </h2>
      <div className="mt-6 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
                borderRadius: '0.5rem',
                color: '#fff',
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}