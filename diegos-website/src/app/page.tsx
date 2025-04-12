import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import ProjectCard from '@/components/ProjectCard'
import SkillItem from '@/components/SkillItem'
import {
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  ServerIcon,
} from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'Project 1',
    description: 'A modern web application built with Next.js and TypeScript.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/next.svg',
    projectUrl: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 2',
    description: 'A RESTful API service with Node.js and Express.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    imageUrl: '/vercel.svg',
    projectUrl: 'https://github.com/yourusername/project2',
  },
]

const skills = [
  {
    name: 'Frontend Development',
    icon: <CodeBracketIcon className="w-8 h-8" />,
    level: 90,
  },
  {
    name: 'Backend Development',
    icon: <ServerIcon className="w-8 h-8" />,
    level: 85,
  },
  {
    name: 'DevOps',
    icon: <CommandLineIcon className="w-8 h-8" />,
    level: 75,
  },
  {
    name: 'System Design',
    icon: <CpuChipIcon className="w-8 h-8" />,
    level: 80,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-4 text-gradient">
            Diego Sanchez
          </h1>
          <h2 className="text-2xl text-gray-400 mb-8">
            Software Engineer
          </h2>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-16"
          >
            <ArrowDownIcon className="w-6 h-6 mx-auto text-gray-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gradient">About Me</h2>
          <div className="glass-effect p-8 rounded-lg">
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate software engineer with expertise in web development.
              I love creating elegant solutions to complex problems and building
              user-friendly applications.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gradient">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gradient">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <SkillItem key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gradient">Contact</h2>
          <div className="glass-effect p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-300"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
