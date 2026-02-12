import Section from './NewSection'
import Skill from './SkillsAndExperience/Skill'
import SkillSection from './SkillSection'

export default function Skills() {
  return (
    <Section title="Skills">
      <div className="grid grid-cols-1 @2xs:grid-cols-2 @4xl:grid-cols-4 gap-6">
        <SkillSection title="Languages">
          <Skill imgSrc="/skills/typescript">TypeScript</Skill>
          <Skill imgSrc="/skills/python">Python</Skill>
          <Skill imgSrc="/skills/html">HTML5</Skill>
          <Skill imgSrc="/skills/css">CSS</Skill>
          <Skill imgSrc="/skills/scss">SCSS</Skill>
        </SkillSection>
        <SkillSection title="Frameworks">
          <Skill imgSrc="/skills/reactjs">React</Skill>
          <Skill imgSrc="/skills/next" dualTone>
            Next.js
          </Skill>
          <Skill imgSrc="/skills/svelte">Svelte / SvelteKit</Skill>
          <Skill imgSrc="/skills/node">Node.js</Skill>
          <Skill imgSrc="/skills/fastapi">FastAPI</Skill>
        </SkillSection>
        <SkillSection title="Databases / data stores">
          <Skill imgSrc="/skills/firestore">Cloud Firestore</Skill>
          <Skill imgSrc="/skills/postgresql">PostgreSQL</Skill>
          <Skill imgSrc="/skills/elasticsearch">Elasticsearch</Skill>
        </SkillSection>
        <SkillSection title="Tools">
          <Skill imgSrc="/skills/github" dualTone>
            Git / GitHub
          </Skill>
          <Skill imgSrc="/skills/cypress">Cypress</Skill>
          <Skill imgSrc="/skills/playwright">Playwright</Skill>
          <Skill imgSrc="/skills/jest">Jest</Skill>
        </SkillSection>
      </div>
    </Section>
  )
}
