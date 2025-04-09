'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(document.documentElement.classList.contains('dark'))

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mounted) {
      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [isDark, mounted])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
  ]

  return (
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-500 
      ${isScrolled 
        ? 'bg-white/70 backdrop-blur-xl dark:bg-slate-900/80 border-b border-slate-200/50 dark:border-slate-800/50 shadow-lg shadow-violet-500/5' 
        : 'bg-transparent'
      }
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-violet-500/0 before:via-fuchsia-500/5 before:to-indigo-500/0 
      before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
      after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px 
      after:bg-gradient-to-r after:from-violet-500/0 after:via-fuchsia-500/50 after:to-indigo-500/0 
      after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500`}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative text-sm font-medium transition-all duration-500 group
                ${pathname === item.path
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-indigo-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100'
                }`}
              >
                <span className="relative">
                  {item.name}
                  {/* Animated underline */}
                  <span className={`absolute -bottom-2 left-0 w-full h-px transform origin-left transition-transform duration-500
                    ${pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                    bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 
                    dark:from-violet-400 dark:via-fuchsia-400 dark:to-indigo-400`} 
                  />
                  {/* Glowing dot */}
                  {pathname === item.path && (
                    <span className="absolute -right-2 -top-1 w-1 h-1 rounded-full bg-fuchsia-500 dark:bg-fuchsia-400 
                    animate-pulse shadow-lg shadow-fuchsia-500/50 dark:shadow-fuchsia-400/50" />
                  )}
                </span>
              </Link>
            ))}
          </div>
          
          {/* Theme toggle button */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="relative group rounded-xl p-2 transition-all duration-500
            before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r 
            before:from-violet-600 before:via-fuchsia-600 before:to-indigo-600 
            before:opacity-0 before:transition-all before:duration-500 hover:before:opacity-10
            dark:before:from-violet-400 dark:before:via-fuchsia-400 dark:before:to-indigo-400
            after:absolute after:inset-0 after:rounded-xl after:border after:border-violet-500/0 
            after:transition-all after:duration-500 hover:after:border-violet-500/50
            dark:after:border-violet-400/0 dark:hover:after:border-violet-400/50"
            aria-label="Toggle dark mode"
          >
            {mounted && (
              <svg
                className="h-5 w-5 text-slate-600 dark:text-slate-300 transition-all duration-500 
                group-hover:text-slate-900 dark:group-hover:text-slate-100 relative z-10
                transform group-hover:rotate-180 group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isDark ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    className="transform origin-center transition-transform duration-500 group-hover:rotate-180"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    className="transform origin-center transition-transform duration-500 group-hover:rotate-180"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
} 