'use client'

import { highlightContactInfo } from './Footer'
import DesktopMenuItem from './Header/DesktopMenuItem'

export default function DesktopMenu() {
  return (
    <div className="hidden sm:flex gap-4">
      <DesktopMenuItem href="#about">About</DesktopMenuItem>
      <DesktopMenuItem href="#portfolio">Portfolio</DesktopMenuItem>
      <DesktopMenuItem href="#contact" onClick={() => highlightContactInfo()}>
        Contact
      </DesktopMenuItem>
    </div>
  )
}
