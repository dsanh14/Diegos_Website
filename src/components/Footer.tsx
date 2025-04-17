'use client';

import Link from 'next/link';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const navigation = [
  { name: 'About', href: '/' },
  { name: 'Skills & Awards', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Classes', href: '/classes' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800">
      <div className="container mx-auto px-4 py-12">
        {/* Contact Section */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <h3 className="text-4xl font-bold mb-8">Contact Me</h3>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:dsanh14@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stone-200 bg-white/50 hover:bg-stone-50 dark:border-stone-800 dark:bg-stone-900/50 dark:hover:bg-stone-800/50 transition-colors"
            >
              <FaEnvelope className="h-5 w-5" />
              <span>dsanh14@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dsanh14/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stone-200 bg-white/50 hover:bg-stone-50 dark:border-stone-800 dark:bg-stone-900/50 dark:hover:bg-stone-800/50 transition-colors"
            >
              <FaLinkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-8 mb-8 text-stone-600 dark:text-stone-400">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-center text-stone-600 dark:text-stone-400">
          <p>Copyright © {new Date().getFullYear()} Diego Sanchez. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
} 