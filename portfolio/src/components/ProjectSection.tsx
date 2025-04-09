'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Project {
  title: string
  description: string
  techStack: string
  link: string
  image: string
  award?: string
}

interface ProjectSectionProps {
  title: string
  projects: Project[]
}

export default function ProjectSection({ title, projects }: ProjectSectionProps) {
  return (
    <section className="relative py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 overflow-hidden">
      {/* Refined Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(51,51,51,0.02),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(200,200,200,0.02),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(51,51,51,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,51,51,0.01)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(200,200,200,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,200,200,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-extralight mb-20 text-center tracking-wider"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-stone-950 to-stone-500 dark:from-stone-200 dark:to-stone-400">
            Selected Works
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={project.link} className="block group">
                <div className="relative p-8 h-full rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] border border-stone-200/10 dark:border-stone-700/10 backdrop-blur-sm hover:bg-white/[0.05] dark:hover:bg-white/[0.05] transition-all duration-700 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform hover:-translate-y-1">
                  {/* Refined Corner Accents */}
                  <div className="absolute top-0 left-0 w-20 h-20">
                    <div className="absolute top-0 left-0 w-[1px] h-12 bg-gradient-to-b from-stone-400/40 to-transparent transform origin-top opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-0 left-0 h-[1px] w-12 bg-gradient-to-r from-stone-400/40 to-transparent transform origin-left opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-20 h-20">
                    <div className="absolute bottom-0 right-0 w-[1px] h-12 bg-gradient-to-t from-stone-400/40 to-transparent transform origin-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute bottom-0 right-0 h-[1px] w-12 bg-gradient-to-l from-stone-400/40 to-transparent transform origin-right opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-light tracking-wide text-stone-800 dark:text-stone-200 group-hover:text-stone-950 dark:group-hover:text-stone-100 transition-colors duration-700">
                      {project.title}
                    </h3>
                    <p className="text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.techStack.split(', ').map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-light rounded-full bg-stone-100/5 dark:bg-stone-800/5 text-stone-600 dark:text-stone-400 border border-stone-200/5 dark:border-stone-700/5 backdrop-blur-sm group-hover:bg-stone-100/10 dark:group-hover:bg-stone-800/10 transition-all duration-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Subtle Arrow Indicator */}
                  <div className="absolute bottom-8 right-8 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700">
                    <svg className="w-5 h-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 