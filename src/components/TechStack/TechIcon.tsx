import React from 'react';
import { 
  Code2, 
  FileJson, 
  Server, 
  Globe, 
  Cloud, 
  Database,
  Layout,
  Box,
  Layers,
  Cpu,
  Monitor,
  Palette
} from 'lucide-react';

const iconMap = {
  javascript: FileJson,
  typescript: Code2,
  react: Globe,
  nodejs: Server,
  nextjs: Box,
  nestjs: Layers,
  aws: Cloud,
  gcp: Cloud,
  postgresql: Database,
  mongodb: Database,
  supabase: Database,
  tailwind: Palette
};

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = '' }: TechIconProps) {
  const IconComponent = iconMap[name.toLowerCase()] || Code2;
  return <IconComponent className={className} />;
}