import PortfolioItem from './PortfolioItem'

export default function MountainComparer() {
  return (
    <PortfolioItem
      title="Mountain Comparer"
      url="https://mountain-comparer.vercel.app/"
      description="Mountain Comparer is a web app that lets users compare the weather conditions at different ski resorts. Mountain Comparer was built using Svelte, SvelteKit, and the OpenWeatherMap API."
      posterSrc="MountainComparerPoster.png"
      src="MountainComparer.mp4"
    />
  )
}
