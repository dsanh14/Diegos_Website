'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-stone-200 bg-white/50 text-stone-600 backdrop-blur-sm transition-all hover:border-stone-300 hover:text-stone-900 dark:border-stone-800 dark:bg-stone-900/50 dark:text-stone-400 dark:hover:border-stone-700 dark:hover:text-stone-100"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <FiSun className="h-5 w-5" />
      ) : (
        <FiMoon className="h-5 w-5" />
      )}
    </button>
  );
} 