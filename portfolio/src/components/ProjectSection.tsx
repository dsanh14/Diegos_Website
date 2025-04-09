import Link from 'next/link'
import Image from 'next/image'

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
    <section className="relative py-24 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-indigo-400 text-transparent bg-clip-text">
        Featured Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Link 
            href={project.link} 
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/20 dark:border-slate-700/50 p-6 transition-all duration-300 hover:bg-white/20 dark:hover:bg-slate-800/70 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/10"
          >
            {/* Project Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {project.title}
              </h3>
              <p className="mb-4 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.split(', ').map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-sm rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Awards */}
              {project.award && (
                <div className="space-y-2">
                  <div 
                    className="flex items-center text-sm text-slate-500 dark:text-slate-400"
                  >
                    <svg 
                      className="w-4 h-4 mr-2 text-yellow-500" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {project.award}
                  </div>
                </div>
              )}
            </div>

            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-violet-500/20 dark:border-violet-400/20 rounded-tl-2xl transition-all duration-300 group-hover:border-violet-500/40 dark:group-hover:border-violet-400/40" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-violet-500/20 dark:border-violet-400/20 rounded-br-2xl transition-all duration-300 group-hover:border-violet-500/40 dark:group-hover:border-violet-400/40" />
          </Link>
        ))}
      </div>
    </section>
  )
} 