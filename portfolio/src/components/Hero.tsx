'use client'

import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      'Software Developer',
      'Full Stack Engineer',
      'Problem Solver',
      'Tech Enthusiast'
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container-padding mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm Diego Sanchez
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-600 dark:text-gray-300">
            <span>{text}</span>
            <Cursor cursorColor="#3B82F6" />
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I build exceptional digital experiences that combine creativity with technical excellence.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 space-x-4"
          >
            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-50" />
      </div>
    </section>
  )
}

export default Hero 