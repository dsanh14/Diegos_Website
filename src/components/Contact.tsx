'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: FaLinkedin,
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: FaEnvelope,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-lg border border-stone-200 bg-white/50 p-6 backdrop-blur-sm dark:border-stone-800 dark:bg-stone-900/50"
      >
        <h2 className="mb-6 text-3xl font-bold bg-gradient-to-r from-stone-900 to-stone-700 bg-clip-text text-transparent dark:from-stone-100 dark:to-stone-300">
          Get in Touch
        </h2>
        <p className="mb-8 text-lg text-stone-600 dark:text-stone-400">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-stone-600 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
              >
                <Icon className="h-6 w-6 transition-transform group-hover:scale-110" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
} 