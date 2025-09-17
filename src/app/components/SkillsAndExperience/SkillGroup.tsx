import { ReactNode } from 'react'

interface SkillGroupProps {
  title: string
  children: ReactNode
}

export default function SkillGroup({ title, children }: SkillGroupProps) {
  return (
    <div className="sm:flex hover:scale-110 transform-gpu antialiased transition py-4 hover:drop-shadow-md drop-shadow-black">
      <div className="my-3 pr-2 text-center sm:w-[27%] mr-2 sm:border-r-2 sm:text-right sm:text-sm">
        {title}
      </div>
      <div className="grid grid-cols-4 gap-3">{children}</div>
    </div>
  )
}
