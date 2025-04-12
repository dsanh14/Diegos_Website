import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  projectUrl: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  projectUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-effect glass-effect-hover rounded-lg overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden group">
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gradient">{title}</h3>
        <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 text-sm rounded-full bg-gray-800/50 text-gray-300 border border-gray-700"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <motion.a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
          whileHover={{ x: 5 }}
        >
          View Project
          <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
        </motion.a>
      </div>
    </motion.div>
  )
} 