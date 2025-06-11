'use client'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Link from 'next/link'
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
          }}>
          <Link href="#about">About</Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose()
          }}>
          <Link href="#skills">Skills</Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose()
          }}>
          <Link href="#experience">Experience</Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose()
          }}>
          <Link href="#portfolio">Portfolio</Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose()
            highlightContactInfo()
          }}>
          <Link href="#contact">Contact</Link>
        </MenuItem>
      </Menu>
    </div>
  )
}
