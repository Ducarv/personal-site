import React from 'react';
import { TechIcon } from './TechIcon';
import { useLanguage } from '../../context/LanguageContext';
import { skillCategories } from './constants';
import { SkillCategory } from './SkillCategory';

export function TechGrid() {
  const { t } = useLanguage();

  return (
    <div className="py-24 bg-gradient-to-b from-emerald-900/20 to-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
          {t('skills.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}