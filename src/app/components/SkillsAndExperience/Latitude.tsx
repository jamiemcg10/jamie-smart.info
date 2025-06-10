import TimelineSegment from './TimelineSegment'

export default function Latitude() {
  return (
    <div className="flex space-x-4 group">
      <TimelineSegment />

      <div>
        <div className="font-semibold">Software Engineer - Latitude Research</div>
        <div className="italic text-sm mb-2">February 2021 - April 2025</div>
        <ol className="ml-4 flex flex-col space-y-2 list-disc">
          <li>
            Translated Figma designs into modular components and integrated them to develop
            responsive application pages
          </li>
          <li>
            Designed and implemented core business logic to deliver efficient, reliable application
            functionality
          </li>
          <li>
            Created and maintained efficient Firestore and ElasticSearch database connections to
            support low-latency updates across dynamic interfaces used by 1,000+ users
          </li>
          <li>
            Wrote automated unit tests to catch repeat bugs early in the CI process, improving
            product stability and reducing bugs by 5%
          </li>
          <li>
            Used the Sentry reporting tool to monitor and resolve errors promptly, improving
            application reliability and reducing issue resolution time by an estimated 15%
          </li>
          <li>
            Participated in code reviews to ensure code met all internal and external standards and
            best practices
          </li>
          <li>
            Improved code quality by refactoring duplicated, inefficient, and outdated logic,
            optimizing maintainability and future scalability
          </li>
        </ol>
      </div>
    </div>
  )
}
