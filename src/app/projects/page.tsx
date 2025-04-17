'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'StudyBuddyConnect',
    tech: ['JavaScript', 'React', 'Node.js'],
    description: 'A collaborative platform for students to connect and study together, enhancing the learning experience through peer interaction.',
    github: 'https://github.com/dsanh14/StudyBuddyConnect',
  },
  {
    title: 'Chromatic-Tuner',
    tech: ['JavaScript', 'Web Audio API', 'HTML5'],
    description: 'A web-based chromatic tuner application that helps musicians tune their instruments with precision using audio analysis.',
    github: 'https://github.com/dsanh14/Chromatic-Tuner',
  },
  {
    title: 'Trade-bot',
    tech: ['Python', 'API Integration', 'Data Analysis'],
    description: 'An automated trading bot that analyzes market data and executes trades based on predefined strategies.',
    github: 'https://github.com/dsanh14/Trade-bot',
  },
  {
    title: 'Hospital_LLM',
    tech: ['Python', 'Machine Learning', 'NLP'],
    description: 'A Language Learning Model application designed for hospital environments, improving medical data processing and analysis.',
    github: 'https://github.com/dsanh14/Hospital_LLM',
  },
  {
    title: 'HeadStart',
    tech: ['Python', 'Data Science'],
    description: 'An educational technology project aimed at providing students with personalized learning pathways.',
    github: 'https://github.com/dsanh14/HeadStart',
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-stone-900 to-stone-700 bg-clip-text text-transparent dark:from-stone-100 dark:to-stone-300">
          Projects
        </h1>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border border-stone-200 bg-white/50 p-6 backdrop-blur-sm transition-all hover:border-stone-300 hover:shadow-lg dark:border-stone-800 dark:bg-stone-900/50 dark:hover:border-stone-700"
            >
              <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                {project.title}
              </h2>
              <div className="mt-1 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-stone-700 dark:text-stone-300">
                {project.description}
              </p>
              <div className="mt-4 flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-stone-600 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
                  >
                    <FaGithub className="h-5 w-5" />
                    <span className="text-sm">View on GitHub</span>
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
                    <span className="text-sm">Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 