import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

interface SkillItemProps {
  name: string
  icon: IconType
  level: number
}

export default function SkillItem({ name, icon: Icon, level }: SkillItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-effect glass-effect-hover rounded-lg p-4 flex flex-col gap-3"
    >
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6 text-stone-600 dark:text-stone-300" />
        <h3 className="text-lg font-light text-stone-700 dark:text-stone-200">{name}</h3>
      </div>
      
      <div className="progress-bar">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="progress-bar-fill"
        />
      </div>
      
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-sm font-light text-stone-500 dark:text-stone-400 self-end"
      >
        {level}%
      </motion.span>
    </motion.div>
  )
} 