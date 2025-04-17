'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/classes', label: 'Classes' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm dark:bg-stone-950/80 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-lg font-semibold bg-gradient-to-r from-stone-900 to-stone-600 bg-clip-text text-transparent dark:from-stone-100 dark:to-stone-400"
        >
          Diego Sanchez
        </Link>
        <nav className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-stone-900 dark:text-stone-100'
                  : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
} 