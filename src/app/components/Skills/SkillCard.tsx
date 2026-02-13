import { ReactNode } from 'react'

interface SkillCardProps {
  title: string
  children: ReactNode
}

export default function SkillCard({ title, children }: SkillCardProps) {
  return (
    <div className="min-w-58.75 w-full max-w-87.5 h-62 border border-gray-300 dark:border-gray-800 shadow-lg bg-white dark:bg-[#0a0a0a] rounded-lg">
      <h1 className="text-lg font-bold p-4 border-b border-b-gray-500">{title}</h1>
      <div className="p-4 flex flex-col space-y-2">{children}</div>
    </div>
  )
}
