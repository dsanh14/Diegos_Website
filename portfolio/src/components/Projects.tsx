'use client'

import { motion } from 'framer-motion'
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration.',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.com'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates using WebSocket.',
    image: '/projects/taskmanager.jpg',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/yourusername/taskmanager',
    demo: 'https://taskmanager-demo.com'
  },
  {
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool using OpenAI API and React.',
    image: '/projects/ai-generator.jpg',
    tags: ['React', 'OpenAI', 'Node.js', 'Express'],
    github: 'https://github.com/yourusername/ai-generator',
    demo: 'https://ai-generator-demo.com'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-padding mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="aspect-video bg-gray-100 dark:bg-gray-600">
                  {/* Add actual images later */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    [Project Image]
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      <CodeBracketIcon className="w-5 h-5" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      <GlobeAltIcon className="w-5 h-5" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 