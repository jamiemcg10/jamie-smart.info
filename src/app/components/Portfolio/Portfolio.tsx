'use client'

import PortfolioItem from './PortfolioItem'
import Section from '../Section'
import Backdrop from '@mui/material/Backdrop'
import { useState } from 'react'
import { preload } from 'react-dom'
import IconButton from '@mui/material/IconButton'

interface Video {
  src: string
  posterSrc: string
  videoType: string
  trackSrc?: string
}

const videos = {
  mvc: {
    src: 'MyVirtualCookbook.mp4',
    videoType: 'video/mp4',
    posterSrc: 'MyVirtualCookbookPoster.png',
    trackSrc: 'MyVirtualCookbook_captions.vtt'
  },
  miocrew: { src: 'MioCrew.mp4', videoType: 'video/mp4', posterSrc: 'MioCrewPoster.png' },
  mountaincomp: {
    src: 'MountainComparer.mp4',
    videoType: 'video/mp4',
    posterSrc: 'MountainComparerPoster.png'
  }
}

const closeBtnSx = {
  color: 'white',
  position: 'absolute',
  top: 24,
  right: 24,
  height: 32,
  width: 32
}

export default function Portfolio() {
  preload('MioCrew.mp4', { as: 'video' })
  preload('MyVirtualCookbook.mp4', { as: 'video' })
  preload('MountainComparer.mp4', { as: 'video' })

  function handleCloseVideo() {
    setVideo(null)
  }
  const [video, setVideo] = useState<Video | null>(null)

  return (
    <>
      <Section title="Projects">
        <div className="grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 gap-x-2 gap-y-6 justify-items-center">
          <PortfolioItem
            title="MioCrew"
            url="https://www.miocrew.com/"
            gitHubUrl="https://github.com/jamiemcg10/miocrew"
            description="A full stack app for helping people coordinate group trip logistics."
            technologies={['React', 'Next.js', 'Python', 'FastAPI']}
            imgSrc="MioCrew.png"
            onDemo={() => setVideo(videos.miocrew)}
          />
          <PortfolioItem
            title="MyVirtualCookbook"
            url="https://my-virtual-cookbook.vercel.app/"
            gitHubUrl="https://github.com/jamiemcg10/MyVirtualCookbook"
            description="A React app for organizing recipies"
            technologies={['React', 'Next.js', 'Firebase Auth', 'Cloud Firestore']}
            imgSrc="MyVirtualCookbook.png"
            onDemo={() => setVideo(videos.mvc)}
          />
          <PortfolioItem
            title="Mountain Comparer"
            url="https://mountain-comparer.vercel.app/"
            gitHubUrl="https://github.com/jamiemcg10/mountain-comparer"
            description="A Svelte app for comparing the weather at different ski resorts."
            technologies={['Svelte', 'SvelteKit']}
            imgSrc="MountainComparer.png"
            onDemo={() => setVideo(videos.mountaincomp)}
          />
        </div>
      </Section>
      <Backdrop open={!!video} onClick={handleCloseVideo}>
        <IconButton size="large" sx={closeBtnSx}>
          &times;
        </IconButton>
        {!!video ? (
          <video controls poster={video?.posterSrc} controlsList="nodownload" width="90%">
            <source src={video?.src} type={video?.videoType} />
            {video?.trackSrc ? <track kind="captions" src={video?.trackSrc} srcLang="en" /> : null}
          </video>
        ) : null}
      </Backdrop>
    </>
  )
}
