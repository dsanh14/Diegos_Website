import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'

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
            {/* Project cards will go here */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gradient">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Skill items will go here */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gradient">Contact</h2>
          <div className="glass-effect p-8 rounded-lg">
            {/* Contact form will go here */}
          </div>
        </div>
      </section>
    </main>
  )
}
