import Section from '../Section'
import Skill from './Skill'
import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <Section title="Skills">
      <div className="grid grid-cols-1 @md:grid-cols-2 @5xl:grid-cols-4 gap-6 justify-items-center">
        <SkillCard title="Languages">
          <Skill imgSrc="/skills/typescript">TypeScript</Skill>
          <Skill imgSrc="/skills/python">Python</Skill>
          <Skill imgSrc="/skills/html">HTML5</Skill>
          <Skill imgSrc="/skills/css">CSS</Skill>
          <Skill imgSrc="/skills/scss">SCSS</Skill>
        </SkillCard>
        <SkillCard title="Frameworks">
          <Skill imgSrc="/skills/reactjs">React</Skill>
          <Skill imgSrc="/skills/next" dualTone>
            Next.js
          </Skill>
          <Skill imgSrc="/skills/svelte">Svelte / SvelteKit</Skill>
          <Skill imgSrc="/skills/node">Node.js</Skill>
          <Skill imgSrc="/skills/fastapi">FastAPI</Skill>
        </SkillCard>
        <SkillCard title="Databases / data stores">
          <Skill imgSrc="/skills/firestore">Cloud Firestore</Skill>
          <Skill imgSrc="/skills/postgresql">PostgreSQL</Skill>
          <Skill imgSrc="/skills/elasticsearch">Elasticsearch</Skill>
        </SkillCard>
        <SkillCard title="Tools">
          <Skill imgSrc="/skills/github" dualTone>
            Git / GitHub
          </Skill>
          <Skill imgSrc="/skills/cypress" dualTone>
            Cypress
          </Skill>
          <Skill imgSrc="/skills/playwright">Playwright</Skill>
          <Skill imgSrc="/skills/jest">Jest</Skill>
        </SkillCard>
      </div>
    </Section>
  )
}
