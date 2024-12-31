import React from 'react';
import { TechIcon } from './TechIcon';

interface Skill {
  name: string;
  icon: string;
}

interface Category {
  title: string;
  skills: Skill[];
}

interface SkillCategoryProps {
  category: Category;
}

export function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <div className="p-6 bg-white/5 backdrop-blur-lg rounded-xl 
                    border border-emerald-500/10 hover:border-emerald-500/20 
                    transition-all duration-300">
      <h3 className="text-xl font-semibold mb-4 text-emerald-400">{category.title}</h3>
      <div className="grid grid-cols-3 gap-4">
        {category.skills.map((skill) => (
          <div key={skill.name} 
               className="flex flex-col items-center p-4 bg-white/5 rounded-lg
                        hover:bg-white/10 transition-all duration-300">
            <TechIcon name={skill.icon} className="w-8 h-8 text-emerald-400 mb-2" />
            <span className="text-sm text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}