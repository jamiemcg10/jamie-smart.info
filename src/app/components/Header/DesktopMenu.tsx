'use client'

import { highlightContactInfo } from '../Footer'
import DesktopMenuItem from './DesktopMenuItem'

export default function DesktopMenu() {
  return (
    <div className="hidden sm:flex gap-4">
      <DesktopMenuItem
        onClick={() => {
          const aboutEl = document.getElementById('about')
          aboutEl?.scrollIntoView({ behavior: 'smooth' })
        }}>
        About
      </DesktopMenuItem>
      <DesktopMenuItem
        onClick={() => {
          const portfolioEl = document.getElementById('portfolio')
          portfolioEl?.scrollIntoView({ behavior: 'smooth' })
        }}>
        Portfolio
      </DesktopMenuItem>
      <DesktopMenuItem
        onClick={() => {
          const contactEl = document.getElementById('contact')
          contactEl?.scrollIntoView({ behavior: 'smooth' })
          highlightContactInfo()
        }}>
        Contact
      </DesktopMenuItem>
    </div>
  )
}
