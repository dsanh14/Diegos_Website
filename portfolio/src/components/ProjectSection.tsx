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
    <section className="space-y-8">
      <h2 className="text-2xl font-bold font-mono text-gray-800 dark:text-slate-100">{title}</h2>
      <div className="space-y-12">
        {projects.map((project) => (
          <div key={project.title} className="group">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block space-y-4 rounded-lg border border-gray-200 bg-white p-6 transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              {project.award && (
                <div className="text-sm text-yellow-600 dark:text-yellow-400">
                  {project.award}
                </div>
              )}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500 dark:text-slate-100 dark:group-hover:text-blue-400">
                  {project.title}
                </h3>
                <svg
                  className="h-5 w-5 text-gray-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500 dark:text-slate-400 dark:group-hover:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <p className="text-gray-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="font-mono text-sm text-gray-500 dark:text-slate-400">
                Tech Stack: {project.techStack}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
} 