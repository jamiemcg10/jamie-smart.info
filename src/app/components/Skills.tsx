import Subheading from './Subheading'

const skills = {
  Languages: 'TypeScript, Python, JavaScript, HTML, CSS',
  Frontend: 'Svelte, SvelteKit, React, Next.js, Cypress, Playwright',
  Backend: 'Express.js, Node.js',
  Databases: 'Cloud Firestore, ElasticSearch, PostgreSQL, MySQL, MongoDB',
  'Tools & Platforms': 'Git, GitHub, Cypress, Playwright, Figma, Linear, Tailwind CSS, Material UI',
  Professional:
    'Efficient communication, cross-functional collaboration, adaptability, attention to detail'
}

export default function Skills() {
  return (
    <div>
      <Subheading>Skills</Subheading>
      <div className="sm:columns-2">
        {Object.entries(skills).map(([category, skillList], i) => {
          return (
            <div key={i}>
              <div className="break-after-avoid">{category}:</div>
              <div className="text-sm mb-2">{skillList}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
