'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Uber',
    period: 'Summer 2023',
    description: 'Working on backend systems and infrastructure.'
  },
  {
    title: 'Teaching Assistant',
    company: 'SF State',
    period: 'Summer 2023',
    description: 'Teaching an introductory CS course.'
  },
  {
    title: 'Research Assistant',
    company: 'UC Berkeley',
    period: '2022-2023',
    description: 'Working on machine learning applications in biology.'
  }
];

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-stone-900 to-stone-700 bg-clip-text text-transparent dark:from-stone-100 dark:to-stone-300">
          Experience
        </h1>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border border-stone-200 bg-white/50 p-6 backdrop-blur-sm transition-all hover:border-stone-300 dark:border-stone-800 dark:bg-stone-900/50 dark:hover:border-stone-700"
            >
              <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                {exp.title}
              </h2>
              <p className="text-stone-600 dark:text-stone-400">
                {exp.company} • {exp.period}
              </p>
              <p className="mt-2 text-stone-700 dark:text-stone-300">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 