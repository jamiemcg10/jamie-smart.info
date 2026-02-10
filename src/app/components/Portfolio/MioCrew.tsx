import PortfolioItem from './PortfolioItem'

export default function MioCrew() {
  return (
    <PortfolioItem
      title="MioCrew"
      url="https://www.miocrew.com/"
      gitHubUrl="https://github.com/jamiemcg10/miocrew"
      description={
        <div className="gap-y-4">
          <p>
            MioCrew is a full stack app designed to help people coordinate group trip logistics.
            Users can create trips, add the crew who's going, create a schedule, track expenses, and
            more.
          </p>

          <p>
            This is a demo app. There is a pre-set list of users that you can log in as, and then
            you can interact with the app as one of those users. The front end was built with React
            and incorporates Next.js for routing. Material UI, HeroUI, and Tailwind CSS are used for
            components and styling. The back end was built with Python and FastAPI. A SQLite
            database and WebSockets are used to provide and synchronize the data layer.
          </p>
        </div>
      }
      posterSrc="MioCrew.png"
      src="MioCrew.mp4"
    />
  )
}
