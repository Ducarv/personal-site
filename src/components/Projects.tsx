import React from 'react';
import { Code2, Database, Cloud, Layout } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Cloud Infrastructure",
      description: "Expertise in AWS and GCP cloud services, implementing scalable and secure solutions.",
      icon: <Cloud className="w-6 h-6" />,
      technologies: ["AWS", "GCP", "Docker", "Kubernetes"]
    },
    {
      title: "Full Stack Development",
      description: "Building modern web applications with React, Next.js, and Node.js.",
      icon: <Code2 className="w-6 h-6" />,
      technologies: ["React", "Next.js", "Node.js", "TypeScript"]
    },
    {
      title: "Database Architecture",
      description: "Designing and implementing efficient database solutions.",
      icon: <Database className="w-6 h-6" />,
      technologies: ["PostgreSQL", "MongoDB", "Supabase"]
    },
    {
      title: "Frontend Excellence",
      description: "Creating responsive and beautiful user interfaces.",
      icon: <Layout className="w-6 h-6" />,
      technologies: ["HTML/CSS", "TailwindCSS", "Ionic"]
    }
  ];

  return (
    <div className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform"
            >
              <div className="mb-4 text-blue-400">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-900 text-blue-200 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}