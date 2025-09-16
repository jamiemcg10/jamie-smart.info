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
        height="45"
        width="45"
        className={`max-w-[45px] min-w-[45px] max-h-[45px] min-h-[45px] ${
          dualTone && 'block dark:hidden'
        }`}
      />
      {dualTone ? (
        <img
          src={`${imgSrc}-white.svg`}
          height="45"
          width="45"
          className="max-w-[45px] min-w-[45px] max-h-[45px] min-h-[45px] hidden dark:block"
        />
      ) : null}
      <div className="text-sm mt-2">{children}</div>
    </div>
  )
}
