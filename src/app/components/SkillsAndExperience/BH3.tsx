import TimelineSegment from './TimelineSegment'

export default function BH3() {
  return (
    <div className="flex space-x-4 group mt-4">
      <TimelineSegment />

      <div>
        <div className="font-semibold">
          Website Administrator - Boston Hash House Harriers Running Club
        </div>
        <div className="italic text-sm mb-2">October 2020 - Present</div>
        <ol className="ml-4 flex flex-col space-y-2 list-disc">
          <li>Keep the club's website up-to-date with accurate and current information</li>
          <li>
            Facilitate annual event registration for ~150 participants by managing form creation,
            data handling, and backend integration
          </li>
          <li>
            Enhance usability by optimizing layouts for mobile devices and improving overall user
            experience
          </li>
          <li>
            Create and maintain documentation to ensure easy onboarding for future administrators
          </li>
          <li>
            Transitioned the database from PostgreSQL to Google Sheets to streamline operations and
            improve usability, using the Sheets API to treat it as a structured data store
            supporting real-time access and dynamic queries
          </li>
          <li>
            Rebuilt the website using the Svelte and SvelteKit frameworks, replacing Ruby on Rails
            to boost speed and simplify maintainability
          </li>
        </ol>
      </div>
    </div>
  )
}
