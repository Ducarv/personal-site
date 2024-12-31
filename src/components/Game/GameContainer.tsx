import React from 'react';
import { SnakeGame } from './SnakeGame';
import { GameControls } from './GameControls';
import { Trophy } from 'lucide-react';

export function GameContainer() {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Interactive Snake Game
            </h2>
            <p className="text-gray-400">Challenge yourself with this classic game!</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Trophy className="text-yellow-400" />
                    High Scores
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Your Best</span>
                      <span className="font-bold">0</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Global Best</span>
                      <span className="font-bold">0</span>
                    </div>
                  </div>
                </div>
                <GameControls />
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg transform -rotate-3" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg transform rotate-3" />
                <div className="relative">
                  <SnakeGame />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}