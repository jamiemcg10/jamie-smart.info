import { ReactNode } from 'react'

interface SkillProps {
  imgSrc: string
  children: ReactNode
  dualTone?: boolean
}

export default function Skill({ imgSrc, children, dualTone }: SkillProps) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={`${imgSrc}.svg`}
        height="50"
        width="50"
        className={`max-w-[50px] min-w-[50px] max-h-[50px] min-h-[50px] ${
          dualTone && 'block dark:hidden'
        }`}
      />
      {dualTone ? (
        <img
          src={`${imgSrc}-white.svg`}
          height="50"
          width="50"
          className="max-w-[50px] min-w-[50px] max-h-[50px] min-h-[50px] hidden dark:block"
        />
      ) : null}
      <div className="text-sm mt-2 text-nowrap">{children}</div>
    </div>
  )
}
