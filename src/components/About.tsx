'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-lg border border-stone-200 bg-white/50 p-8 backdrop-blur-sm dark:border-stone-800 dark:bg-stone-900/50"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-stone-200 to-stone-300 dark:from-stone-800 dark:to-stone-700 transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-stone-300/20 to-stone-400/20 dark:from-stone-700/20 dark:to-stone-600/20 transition-opacity duration-300 backdrop-blur-sm" />
                <Image
                  src="/profile.jpg"
                  alt="Diego Sanchez"
                  width={256}
                  height={256}
                  priority
                  className="relative rounded-full object-cover p-1 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-stone-900 to-stone-700 bg-clip-text text-transparent dark:from-stone-100 dark:to-stone-300 mb-4">
                  Diego Sanchez
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-stone-600 dark:text-stone-400 mb-6">
                  Software Engineer
                </h2>
                <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
                  I'm a passionate software engineer with experience in full-stack development, 
                  machine learning, and educational technology. I love building tools that make 
                  a difference in people's lives.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a
                    href="https://github.com/dsanh14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-100 text-stone-900 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700 transition-colors"
                  >
                    <FaGithub className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dsanh14/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-100 text-stone-900 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700 transition-colors"
                  >
                    <FaLinkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 