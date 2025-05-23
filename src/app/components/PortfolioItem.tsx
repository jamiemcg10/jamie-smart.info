import Subheading from './Subheading'

interface PortfolioItemProps {
  title: string
  url: string
  description: string
  posterSrc: string
  src: string
  videoType?: string
}

export default function PortfolioItem({
  title,
  url,
  description,
  posterSrc,
  src,
  videoType = 'video/mp4'
}: PortfolioItemProps) {
  return (
    <div className="flex flex-col sm:flex-row mb-8 sm:mb-12">
      <div className="basis-1/2 sm:pr-6 mt-8 sm:mt-0">
        <video controls muted poster={posterSrc}>
          <source src={src} type={videoType}></source>
        </video>
      </div>
      <div className="basis-1/2 sm:pl-6 mt-4 sm:mt-0">
        <Subheading>{title}</Subheading>
        <a href={url} target="_blank" className="text-sm underline italic">
          {url}
        </a>
        <div className="text-sm mt-4">{description}</div>
      </div>
    </div>
  )
}
