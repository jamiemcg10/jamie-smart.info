import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

export default function Footer() {
  return (
    <div className="mt-8 text-right">
      <IconButton href="https://github.com/jamiemcg10" target="_blank" size="small">
        <GitHubIcon sx={{ color: 'white' }} />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/jamie-a-smart" target="_blank" size="small">
        <LinkedInIcon sx={{ color: 'white' }} />
      </IconButton>
      <IconButton href="mailto:jamie@jamie-smart.info" target="_blank" size="small">
        <EmailIcon sx={{ color: 'white' }} />
      </IconButton>
    </div>
  )
}
