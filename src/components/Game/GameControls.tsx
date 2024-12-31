import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Space } from 'lucide-react';

export function GameControls() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold mb-4">How to Play</h3>
      <div className="grid grid-cols-3 gap-2 max-w-[200px] mx-auto">
        <div className="col-start-2">
          <KeyButton icon={<ArrowUp size={20} />} label="Up" />
        </div>
        <div className="col-start-1 col-end-2">
          <KeyButton icon={<ArrowLeft size={20} />} label="Left" />
        </div>
        <div className="col-start-2">
          <KeyButton icon={<ArrowDown size={20} />} label="Down" />
        </div>
        <div className="col-start-3">
          <KeyButton icon={<ArrowRight size={20} />} label="Right" />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <KeyButton icon={<Space size={20} />} label="Pause/Resume" className="w-full" />
      </div>
    </div>
  );
}

function KeyButton({ icon, label, className = '' }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center mb-1">
        {icon}
      </div>
      <span className="text-xs text-gray-400">{label}</span>
    </div>
  );
}