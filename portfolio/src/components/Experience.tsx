'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: [
      'Led development of multiple high-impact web applications using Next.js and TypeScript',
      'Implemented CI/CD pipelines reducing deployment time by 40%',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Innovations',
    period: '2020 - 2022',
    description: [
      'Developed and maintained various client projects using React and Node.js',
      'Optimized database queries resulting in 50% faster load times',
      'Collaborated with design team to implement responsive UI/UX improvements'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'StartUp Labs',
    period: '2018 - 2020',
    description: [
      'Built RESTful APIs using Node.js and Express',
      'Implemented user authentication and authorization systems',
      'Contributed to the development of microservices architecture'
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-padding mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
              >
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
                
                <div className="mb-1">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-blue-500 dark:text-blue-400">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 