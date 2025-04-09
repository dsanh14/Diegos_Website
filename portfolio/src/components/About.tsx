'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="relative py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 overflow-hidden">
      {/* Refined Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(51,51,51,0.02),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(200,200,200,0.02),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(51,51,51,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,51,51,0.01)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(200,200,200,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,200,200,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-stone-100/10 to-stone-50/5 dark:from-stone-800/10 dark:to-stone-900/5 backdrop-blur-sm border border-stone-200/10 dark:border-stone-700/10 transform rotate-6 transition-transform duration-700 group-hover:rotate-3" />
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extralight tracking-wider text-stone-800 dark:text-stone-200">
                About Me
              </h2>
              <p className="text-lg font-light leading-relaxed text-stone-600 dark:text-stone-400">
                I'm a third-year CS undergraduate at UC Berkeley, passionate about software engineering and research. My focus lies in full-stack development, machine learning in biology, and making CS education more equitable.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-light tracking-wide text-stone-700 dark:text-stone-300">
                Current Endeavors
              </h3>
              <div className="space-y-4">
                <p className="font-light leading-relaxed text-stone-600 dark:text-stone-400">
                  This summer, I'll be joining Uber as a SWE Intern while also teaching an Intro to CS course at SSF. Outside of tech, I'm an enthusiastic baker, hackathon participant, and One Piece fan.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center space-x-4">
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-stone-100/5 dark:bg-stone-800/5 border border-stone-200/10 dark:border-stone-700/10 text-stone-600 dark:text-stone-400 hover:bg-stone-100/10 dark:hover:bg-stone-800/10 transition-all duration-700"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-stone-100/5 dark:bg-stone-800/5 border border-stone-200/10 dark:border-stone-700/10 text-stone-600 dark:text-stone-400 hover:bg-stone-100/10 dark:hover:bg-stone-800/10 transition-all duration-700"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 