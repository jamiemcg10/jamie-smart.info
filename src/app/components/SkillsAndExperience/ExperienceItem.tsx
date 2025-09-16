import TimelineSegment from './TimelineSegment'

interface ExperienceItemProps {
  title: string
  company: string
  dates: string
  bullets: string[]
}

export default function ExperienceItem({ title, company, dates, bullets }: ExperienceItemProps) {
  return (
    <div className="flex space-x-4 group">
      <TimelineSegment />

      <div>
        <div className="font-semibold text-lg">
          {title} - {company}
        </div>
        <div className="italic mb-2">{dates}</div>
        <ol className="ml-4 flex flex-col space-y-2 list-disc text-lg">
          {bullets.map((bullet, i) => {
            return <li key={i}>{bullet}</li>
          })}
        </ol>
      </div>
    </div>
  )
}
