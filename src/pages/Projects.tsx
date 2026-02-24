import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'DevSpace',
    description: 'A modern developer portfolio built with React, TypeScript, and Tailwind CSS. Features a minimalist cyberpunk design with dark mode support.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'CloudSync',
    description: 'A real-time collaborative code editor with WebSocket-based synchronization. Supports multiple programming languages and syntax highlighting.',
    tech: ['Node.js', 'WebSockets', 'React', 'Monaco Editor'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'DataPipeline',
    description: 'An ETL pipeline framework for processing large datasets. Features parallel processing, error handling, and progress tracking.',
    tech: ['Python', 'Airflow', 'PostgreSQL', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'API Gateway',
    description: 'A lightweight API gateway with rate limiting, authentication, and request logging. Built for microservices architecture.',
    tech: ['Go', 'Redis', 'JWT', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'TaskFlow',
    description: 'A task management application with Kanban boards, due dates, and team collaboration features.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'ML Pipeline',
    description: 'A machine learning pipeline for training and deploying models. Includes data preprocessing, model evaluation, and API endpoints.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

export function Projects() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-home mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-xl">
            A collection of projects I've worked on, showcasing my experience with
            various technologies and solving real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium rounded-md bg-secondary/10 text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
