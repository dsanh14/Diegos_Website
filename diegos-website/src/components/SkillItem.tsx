import { motion } from 'framer-motion'

interface SkillItemProps {
  name: string
  icon: React.ReactNode
  level: number
}

export default function SkillItem({ name, icon, level }: SkillItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="glass-effect glass-effect-hover p-6 rounded-lg text-center"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="mb-4 text-indigo-400"
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-semibold mb-4 text-gradient">{name}</h3>
      <div className="progress-bar">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="progress-bar-fill"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-2 text-sm text-gray-400"
      >
        {level}%
      </motion.div>
    </motion.div>
  )
} 