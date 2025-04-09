interface TabProps {
  name: string
  isSelected: boolean
  onClick: () => void
}

export default function Tab({ name, isSelected, onClick }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium transition-colors ${
        isSelected
          ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white'
          : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
      }`}
    >
      {name}
    </button>
  )
} 