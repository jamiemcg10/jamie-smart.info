import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

const iconSx = {
  color: 'var(--foreground)'
}

export default function Footer() {
  return (
    <div className="h-58 p-12 text-center">
      <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
      <IconButton href="https://github.com/jamiemcg10" target="_blank" size="small">
        <GitHubIcon sx={iconSx} />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/jamie-a-smart" target="_blank" size="small">
        <LinkedInIcon sx={iconSx} />
      </IconButton>
      <IconButton href="mailto:jamie@jamie-smart.info" target="_blank" size="small">
        <EmailIcon sx={iconSx} />
      </IconButton>
    </div>
  )
}
