import { motion } from 'framer-motion'

interface SkillItemProps {
  name: string
  icon: React.ReactNode
  level: number
}

export default function SkillItem({ name, icon, level }: SkillItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass-effect p-4 rounded-lg text-center"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-blue-500 rounded-full"
        />
      </div>
    </motion.div>
  )
} 