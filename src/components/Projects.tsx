'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js and Tailwind CSS, featuring dark mode and smooth animations.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://your-portfolio.com',
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-stone-900 to-stone-700 bg-clip-text text-transparent dark:from-stone-100 dark:to-stone-300">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ scale: 1.02 }}
              className="group rounded-lg border border-stone-200 bg-white/50 p-6 transition-all duration-300 hover:border-stone-300 hover:shadow-lg dark:border-stone-800 dark:bg-stone-900/50 dark:hover:border-stone-700"
            >
              <h3 className="mb-2 text-xl font-semibold text-stone-900 dark:text-stone-100">
                {project.title}
              </h3>
              <p className="mb-4 text-stone-600 dark:text-stone-400">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700 dark:bg-stone-800 dark:text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-stone-600 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
                  >
                    <FaGithub className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-stone-600 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
                  >
                    <FaExternalLinkAlt className="h-4 w-4" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 