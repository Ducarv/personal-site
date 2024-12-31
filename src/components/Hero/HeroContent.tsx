import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SocialLinks } from './SocialLinks';

export function HeroContent() {
  const { t } = useLanguage();

  return (
    <div className="relative container mx-auto px-4 min-h-screen flex items-center">
      <div className="max-w-4xl">
        {/* Left side social links */}
        <SocialLinks />
        
        {/* Main content */}
        <div className="space-y-6">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-[#3ECF8E] to-[#24B47E] bg-clip-text text-transparent">
            {t('hero.greeting')}
          </h1>
          
          <p className="text-3xl font-light text-gray-300">
            {t('hero.title')}
          </p>
          
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex gap-4 pt-8">
            <a href="#projects" 
               className="px-6 py-3 bg-[#3ECF8E] hover:bg-[#24B47E] rounded-md 
                        transition-all duration-300 font-medium">
              {t('hero.cta.projects')}
            </a>
            <a href="#contact"
               className="px-6 py-3 border border-[#3ECF8E] text-[#3ECF8E] 
                        hover:bg-[#3ECF8E] hover:text-white rounded-md
                        transition-all duration-300 font-medium">
              {t('hero.cta.contact')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}