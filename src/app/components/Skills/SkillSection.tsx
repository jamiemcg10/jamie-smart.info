import { ReactNode } from 'react'

interface SkillSectionProps {
  title: string
  children: ReactNode
}

export default function SkillSection({ title, children }: SkillSectionProps) {
  return (
    <div className="min-w-[235px] w-full max-w-87.5 h-62 border border-gray-300 shadow-lg bg-white rounded-lg">
      <h1 className="text-lg font-bold p-4 border-b border-b-gray-500">{title}</h1>
      <div className="p-4 flex flex-col space-y-2">{children}</div>
    </div>
  )
}
