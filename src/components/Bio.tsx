import React from 'react';
import { Bitcoin, Github, Linkedin } from 'lucide-react';

export function Bio() {
  return (
    <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl">
      <div className="absolute -right-4 -top-4 h-32 w-32 animate-spin-slow rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 opacity-20 blur-lg" />
      <div className="absolute -right-2 -top-2 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-yellow-500">
        <Bitcoin className="h-16 w-16 animate-pulse text-white" />
      </div>
      <div className="relative">
        <h1 className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-4xl font-bold text-transparent">
          Software Engineer & Bitcoin Enthusiast
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          I'm Eduardo, a seasoned Software Engineer specializing in full-stack development with JavaScript and TypeScript,
          particularly focusing on Node.js and React.js. I have extensive experience working with cloud platforms such
          as AWS and Google Cloud Platform (GCP). I'm passionate about building secure and scalable Bitcoin-powered solutions,
          actively contributing to open-source projects, and continually expanding my skill set by learning technologies like Linux,
          Bitcoin development, Rust and Bash.
        </p>
        <div className="mt-6 flex space-x-4">
          <a
            href="https://github.com/Ducarv"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 rounded-lg bg-gray-800 px-4 py-2 text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-orange-500/20"
          >
            <Github className="transition-transform duration-300 group-hover:scale-110" size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ducarvalho-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 rounded-lg bg-gray-800 px-4 py-2 text-white transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-orange-500/20"
          >
            <Linkedin className="transition-transform duration-300 group-hover:scale-110" size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}