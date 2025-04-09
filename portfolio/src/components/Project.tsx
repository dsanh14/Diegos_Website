import Image from 'next/image'
import Link from 'next/link'

interface ProjectProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  projectUrl: string
}

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
} 