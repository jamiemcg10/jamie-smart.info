'use client'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkIcon from '@mui/icons-material/Link'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { ReactNode } from 'react'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import Tooltip from '@mui/material/Tooltip'

interface PortfolioItemProps {
  title: string
  url: string
  gitHubUrl: string
  description: ReactNode
  technologies: string[]
  imgSrc: string
  onDemo: () => void
}

const linkIconSx = {
  color: 'var(--foreground)',
  fontSize: '1.5rem'
}

export default function PortfolioItem({
  title,
  url,
  gitHubUrl,
  description,
  technologies,
  imgSrc,
  onDemo
}: PortfolioItemProps) {
  return (
    <div className="w-65.5 h-75 overflow-hidden border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] rounded-lg shadow-lg">
      <img src={imgSrc} className="h-26 w-full" />
      <div className="p-3 flex flex-col gap-y-2 h-[196px]">
        <div className="text-lg font-bold">{title}</div>
        <div className="text-xs h-8">{description}</div>
        <div>
          {technologies.map((tech) => {
            return (
              <div
                key={tech}
                className="inline-flex mr-1 px-1.5 py-0.5 bg-gray-300 dark:bg-gray-700 rounded-sm text-xs">
                {tech}
              </div>
            )
          })}
        </div>
        <div className="flex justify-between mt-auto">
          <div>
            <Tooltip title="Link to app">
              <IconButton href={url} target="_blank" size="small">
                <LinkIcon sx={linkIconSx} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Link to GitHub repo">
              <IconButton href={gitHubUrl} target="_blank" size="small">
                <GitHubIcon sx={linkIconSx} />
              </IconButton>
            </Tooltip>
          </div>
          <Tooltip title="See demo video">
            <Button variant="contained" size="small" onClick={onDemo}>
              <PlayArrowRoundedIcon /> <span className="ml-1">Demo</span>
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
