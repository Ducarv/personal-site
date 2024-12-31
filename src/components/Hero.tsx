import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-black text-white min-h-screen">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            Eduardo Carvalho
          </h1>
          <p className="text-2xl mb-8 text-blue-300">
            Full Stack Software Engineer
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <a href="https://github.com/yourusername" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {['JavaScript', 'TypeScript', 'NodeJS', 'ReactJS', 'NextJS', 'NestJS', 'AWS', 'GCP'].map((tech) => (
              <div key={tech} className="bg-blue-900/50 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2 justify-center">
                <Terminal size={16} />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}