'use client'

import { MouseEventHandler, ReactNode } from 'react'

interface DesktopMenuItemProps {
  children: ReactNode
  onClick: MouseEventHandler<HTMLDivElement>
}

export default function DesktopMenuItem({ children, onClick }: DesktopMenuItemProps) {
  return (
    <div className="group">
      <div className="h-0.5 justify-self-center border-b-2 border-b-white group-hover:w-full w-0 transition-all"></div>
      <div onClick={onClick} className="cursor-pointer">
        {children}
      </div>
    </div>
  )
}
