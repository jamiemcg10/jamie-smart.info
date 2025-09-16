import { ReactNode } from 'react'

interface SkillGroupProps {
  title: string
  children: ReactNode
}

export default function SkillGroup({ title, children }: SkillGroupProps) {
  return (
    <div className="sm:flex">
      <div className="my-3 pr-2 text-center sm:w-1/5 mr-4 sm:border-r">{title}</div>
      <div className="grid grid-cols-4 gap-3">{children}</div>
    </div>
  )
}
