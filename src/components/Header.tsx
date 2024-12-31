import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-emerald-500/10">
      <div className="container mx-auto px-4 py-3 flex justify-end items-center">
        <button
          onClick={toggleLanguage}
          className="flex items-center px-4 py-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 
                   transition-colors duration-200"
        >
          <Globe className="w-5 h-5 text-emerald-400" />
          <span className="ml-2 text-emerald-400">{language.toUpperCase()}</span>
        </button>
      </div>
    </header>
  );
}