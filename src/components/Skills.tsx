'use client';

import { motion } from 'framer-motion';
import { SiPython, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiOctave, SiC, SiDotnet } from 'react-icons/si';
import { TbBrandOpenai } from 'react-icons/tb';
import SkillItem from './SkillItem';

const skills = [
  {
    name: 'Python',
    icon: SiPython,
    level: 'Experienced',
  },
  {
    name: 'HTML5',
    icon: SiHtml5,
    level: 'Experienced',
  },
  {
    name: 'CSS3',
    icon: SiCss3,
    level: 'Experienced',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    level: 'Experienced',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    level: 'Experienced',
  },
  {
    name: 'React',
    icon: SiReact,
    level: 'Experienced',
  },
  {
    name: 'MATLAB',
    icon: SiOctave,
    level: 'Experienced',
  },
  {
    name: 'C',
    icon: SiC,
    level: 'Intermediate',
  },
  {
    name: 'LangChain',
    icon: TbBrandOpenai,
    level: 'Intermediate',
  },
  {
    name: 'C#',
    icon: SiDotnet,
    level: 'Intermediate',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-stone-900 to-stone-700 bg-clip-text text-transparent dark:from-stone-100 dark:to-stone-300 text-center">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillItem
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 