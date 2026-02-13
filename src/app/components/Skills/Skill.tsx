import { ReactNode } from 'react'

interface SkillProps {
  imgSrc: string
  children: ReactNode
  dualTone?: boolean
}

export default function Skill({ imgSrc, children, dualTone }: SkillProps) {
  return (
    <div className="flex items-center">
      <img
        src={`${imgSrc}.svg`}
        height="25"
        width="25"
        className={`max-w-[25px] min-w-[25px] max-h-[25px] min-h-[25px] ${
          dualTone && 'block dark:hidden'
        }`}
      />
      {dualTone ? (
        <img
          src={`${imgSrc}-white.svg`}
          height="25"
          width="25"
          className="max-w-[25px] min-w-[25px] max-h-[25px] min-h-[25px] hidden dark:block"
        />
      ) : null}
      <div className="font-bold text-sm ml-1 text-center antialiased">{children}</div>
    </div>
  )
}
