import Button from '@mui/material/Button'
import Section from './Section'

export default function About() {
  return (
    <Section title="About Me">
      <ol className="list-disc mb-4">
        <li>
          Full stack engineer with ~4 years professional experience building responsive frontend
          interfaces, REST APIs, and cloud-backed applications using TypeScript, React, and modern
          web tooling
        </li>
        <li>
          Experienced in maintaining production systems end-to-end, including CI/CD pipelines,
          automated testing suites, observability tooling, and Google Cloud infrastructure
        </li>
        <li>
          Proven ability to work in modern team environments with agile workflows, monorepo
          architectures, and shared microservices
        </li>
        <li>
          Demonstrated ownership beyond coding through documentation, developer onboarding support,
          and ongoing maintenance of live applications
        </li>
        <li>
          Broad technical stack spanning multiple frontend frameworks, backend technologies,
          databases, and testing tools, supported by a master’s degree in computer science
        </li>
      </ol>
      <Button variant="contained" href="/resume">
        View full resume
      </Button>
    </Section>
  )
}
