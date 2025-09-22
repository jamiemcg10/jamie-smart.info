import Skill from './Skill'
import Subheading from '../Subheading'
import SkillGroup from './SkillGroup'

export default function Skills() {
  return (
    <div className="relative">
      <div className="absolute -mt-22" id="skills"></div>
      <div className="w-full sm:w-auto">
        <Subheading>Skills</Subheading>
        <div className="flex flex-col">
          <SkillGroup title="Languages">
            <Skill imgSrc="/skills/typescript">TypeScript</Skill>
            <Skill imgSrc="/skills/javascript">JavaScript</Skill>
            <Skill imgSrc="/skills/python">Python</Skill>
            <Skill imgSrc="/skills/java">Java</Skill>
            <Skill imgSrc="/skills/html">HTML5</Skill>
            <Skill imgSrc="/skills/css">CSS</Skill>
            <Skill imgSrc="/skills/scss">SCSS</Skill>
          </SkillGroup>
          <SkillGroup title="Frontend">
            <Skill imgSrc="/skills/svelte">Svelte</Skill>
            <Skill imgSrc="/skills/svelte">SvelteKit</Skill>
            <Skill imgSrc="/skills/reactjs">React.js</Skill>
            <Skill imgSrc="/skills/next" dualTone>
              Next.js
            </Skill>
          </SkillGroup>
          <SkillGroup title="Backend">
            <Skill imgSrc="/skills/express" dualTone>
              Express.js
            </Skill>
            <Skill imgSrc="/skills/node">Node.js</Skill>
            <Skill imgSrc="/skills/fastapi">FastAPI</Skill>
          </SkillGroup>
          <SkillGroup title="Databases">
            <Skill imgSrc="/skills/firestore">Cloud Firestore</Skill>
            <Skill imgSrc="/skills/postgresql">PostgreSQL</Skill>
            <Skill imgSrc="/skills/mysql">MySQL</Skill>
            <Skill imgSrc="/skills/mongodb">MongoDB</Skill>
          </SkillGroup>
          <SkillGroup title="Testing">
            <Skill imgSrc="/skills/cypress" dualTone>
              Cypress
            </Skill>
            <Skill imgSrc="/skills/playwright">Playwright</Skill>
            <Skill imgSrc="/skills/jest">Jest</Skill>
          </SkillGroup>
          <SkillGroup title="Tools & Platforms">
            <Skill imgSrc="/skills/git">Git</Skill>
            <Skill imgSrc="/skills/github" dualTone>
              GitHub
            </Skill>
            <Skill imgSrc="/skills/elasticsearch">Elasticsearch</Skill>
            <Skill imgSrc="/skills/figma">Figma</Skill>
            <Skill imgSrc="/skills/tailwind-css">Tailwind CSS</Skill>
            <Skill imgSrc="/skills/material-ui">Material UI</Skill>
            <Skill imgSrc="/skills/bootstrap">Bootstrap</Skill>
          </SkillGroup>
        </div>
      </div>
    </div>
  )
}
