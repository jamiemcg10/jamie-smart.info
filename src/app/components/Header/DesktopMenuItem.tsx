'use client'

import Link from 'next/link'
import { MouseEventHandler, ReactNode } from 'react'

interface DesktopMenuItemProps {
  href: string
  children: ReactNode
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export default function DesktopMenuItem({ href, children, onClick }: DesktopMenuItemProps) {
  return (
    <div className="group">
      <div className="h-0.5 justify-self-center border-b-2 border-b-white group-hover:w-full w-0 transition-all"></div>
      <Link href={href} onClick={onClick}>
        {children}
      </Link>
    </div>
  )
}
