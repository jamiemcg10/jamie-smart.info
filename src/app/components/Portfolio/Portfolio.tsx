import PortfolioItem from './PortfolioItem'
import Section from '../Section'

//   posterSrc,
//   src,
//   videoType = 'video/mp4',
//   trackSrc

//     <video controls poster={posterSrc} controlsList="nodownload">
//       <source src={src} type={videoType} />
//       {trackSrc ? <track kind="captions" src={trackSrc} srcLang="en" /> : null}
//     </video>

//   src="MyVirtualCookbook.mp4"
//   trackSrc="MyVirtualCookbook_captions.vtt"
export default function Portfolio() {
  return (
    <Section title="Projects">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <PortfolioItem
          title="MioCrew"
          url="https://www.miocrew.com/"
          gitHubUrl="https://github.com/jamiemcg10/miocrew"
          description="A full stack app for helping people coordinate group trip logistics."
          technologies={['React', 'Next.js', 'Python', 'FastAPI']}
          imgSrc="MioCrew.png"
        />
        <PortfolioItem
          title="MyVirtualCookbook"
          url="https://my-virtual-cookbook.vercel.app/"
          gitHubUrl="https://github.com/jamiemcg10/MyVirtualCookbook"
          description="A React app for organizing recipies"
          technologies={['React', 'Next.js', 'Firebase Auth', 'Cloud Firestore']}
          imgSrc="MyVirtualCookbook.png"
        />
        <PortfolioItem
          title="Mountain Comparer"
          url="https://mountain-comparer.vercel.app/"
          gitHubUrl="https://github.com/jamiemcg10/mountain-comparer"
          description="A Svelte app for comparing the weather at different ski resorts."
          technologies={['Svelte', 'SvelteKit']}
          imgSrc="MountainComparer.png"
        />
      </div>
    </Section>
  )
}
