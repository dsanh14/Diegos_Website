'use client'

import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    'JavaScript/TypeScript',
    'React.js',
    'Next.js',
    'Node.js',
    'Python',
    'SQL',
    'Git',
    'AWS',
    'Docker',
    'REST APIs',
    'TailwindCSS',
    'MongoDB'
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-padding mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                I'm a passionate Full Stack Developer with a strong foundation in web technologies 
                and a keen eye for creating elegant solutions to complex problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                My journey in software development has been driven by curiosity and a desire to build 
                meaningful applications that make a difference. I enjoy working on both frontend and 
                backend technologies, with a particular interest in creating seamless user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge with the developer community.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 