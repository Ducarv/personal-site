import React from 'react';
import { Bio } from './components/Bio';
import { BlockExplorer } from './components/BlockExplorer';
import { PricesDashboard } from './components/PricesDashboard';
import { Resources } from './components/Resources';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 px-4 py-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <Bio />
        <div className="grid gap-8 lg:grid-cols-2">
          <BlockExplorer />
          <PricesDashboard />
        </div>
        <Resources />
      </div>
    </div>
  );
}

export default App;