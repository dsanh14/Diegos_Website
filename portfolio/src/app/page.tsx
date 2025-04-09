'use client';

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-8 relative">
        {/* Hero Section */}
        <div className="text-center space-y-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl sm:text-7xl md:text-8xl font-light tracking-tight"
          >
            <span className="inline-block bg-clip-text text-transparent bg-[linear-gradient(to_right,#0EA5E9,#6366F1,#8B5CF6)] animate-gradient-x font-extralight">
              Hi, I'm Diego Sanchez
            </span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-wider"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 dark:from-sky-300 dark:via-indigo-300 dark:to-purple-300">
              Full Stack Engineer
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl max-w-2xl mx-auto text-slate-600 dark:text-slate-300 font-light tracking-wide"
          >
            I build exceptional digital experiences that combine creativity with technical excellence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-6 justify-center mt-12"
          >
            <Link 
              href="/projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 hover:from-sky-600 hover:via-indigo-600 hover:to-purple-600 text-white font-light tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
            >
              View My Work
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-3 rounded-full bg-white/5 dark:bg-white/10 text-slate-700 dark:text-slate-200 font-light tracking-wider border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/10 dark:hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] backdrop-blur-sm"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
      </main>
      <Footer />
    </div>
  )
} 