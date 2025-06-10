import { ReactNode } from 'react'

interface SkillProps {
  imgSrc: string
  children: ReactNode
}

export default function Skill({ imgSrc, children }: SkillProps) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={imgSrc}
        height="50"
        width="50"
        className="max-w-[50px] min-w-[50px] max-h-[50px] min-h-[50px]"
      />
      <div className="text-xs mt-2">{children}</div>
    </div>
  )
}
