'use client'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { MouseEventHandler, useState } from 'react'
import { highlightContactInfo } from '../Footer'

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setAnchorEl(e.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }
  return (
    <div className="flex sm:hidden">
      <IconButton onClick={handleClick}>
        <MenuRoundedIcon
          sx={{
            color: 'var(--foreground)'
          }}
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              color: 'var(--foreground)',
              backdropFilter: 'blur(8px)',
              backgroundColor: 'var(--menu)'
            }
          }
        }}>
        <MenuItem
          onClick={() => {
            handleClose()
            const aboutEl = document.getElementById('about')
            aboutEl?.scrollIntoView({ behavior: 'smooth' })
          }}>
          <div>About</div>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose()
            const skillsEl = document.getElementById('skills')
            skillsEl?.scrollIntoView({ behavior: 'smooth' })
          }}>
          <div>Skills</div>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose()
            const experienceEl = document.getElementById('experience')
            experienceEl?.scrollIntoView({ behavior: 'smooth' })
          }}>
          <div>Experience</div>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose()
            const portfolioEl = document.getElementById('portfolio')
            portfolioEl?.scrollIntoView({ behavior: 'smooth' })
          }}>
          <div>Portfolio</div>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose()
            const contactEl = document.getElementById('contact')
            contactEl?.scrollIntoView({ behavior: 'smooth' })
            highlightContactInfo()
          }}>
          <div>Contact</div>
        </MenuItem>
      </Menu>
    </div>
  )
}
