import React from 'react';
import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6">
      <SocialLink href="https://github.com/yourusername" icon={<Github />} label="GitHub" />
      <SocialLink href="https://linkedin.com/in/yourusername" icon={<Linkedin />} label="LinkedIn" />
      <SocialLink href="mailto:your.email@example.com" icon={<Mail />} label="Email" />
      <SocialLink href="/resume.pdf" icon={<BookOpen />} label="Resume" />
      <div className="w-px h-32 bg-gradient-to-b from-[#3ECF8E] to-transparent mx-auto mt-4" />
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a href={href}
       className="group relative flex items-center gap-4 text-gray-400 hover:text-[#3ECF8E] transition-colors duration-300"
       target="_blank"
       rel="noopener noreferrer">
      <span className="w-10 h-10 flex items-center justify-center border border-gray-700 
                     rounded-full group-hover:border-[#3ECF8E] transition-colors duration-300">
        {icon}
      </span>
      <span className="absolute left-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {label}
      </span>
    </a>
  );
}