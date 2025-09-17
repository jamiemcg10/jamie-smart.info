import PortfolioItem from './PortfolioItem'

export default function MioCrew() {
  return (
    <PortfolioItem
      title="MioCrew"
      url="https://miocrew.vercel.app/"
      gitHubUrl="https://github.com/jamiemcg10/miocrew"
      description="MioCrew is a web app that helps friends stay organized when they travel. Users can keep track of itineraries, expenses, and more all in one place. The frontend was built using React, Next.js, MaterialUI, HeroUI, and TailwindCSS. The backend, still in progress, is being built using Python, FastAPI, and SQLite."
      posterSrc="MioCrew.png"
      src="MioCrew.mp4"
      underConstruction
    />
  )
}
