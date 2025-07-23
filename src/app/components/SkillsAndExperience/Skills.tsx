import Skill from './Skill'
import Subheading from '../Subheading'

export default function Skills() {
  return (
    <div className="relative">
      <div className="absolute -mt-22" id="skills"></div>
      <div className="w-full sm:w-auto">
        <Subheading>Skills</Subheading>
        <div className="flex flex-col gap-8">
          <div>
            <div className="my-3 text-center">Languages</div>
            <div className="grid grid-cols-4 gap-3">
              <Skill imgSrc="/skills/typescript">Typescript</Skill>
              <Skill imgSrc="/skills/javascript">Javascript</Skill>
              <Skill imgSrc="/skills/python">Python</Skill>
              <Skill imgSrc="/skills/java">Java</Skill>
              <Skill imgSrc="/skills/html">HTML5</Skill>
              <Skill imgSrc="/skills/css">CSS</Skill>
              <Skill imgSrc="/skills/scss">SCSS</Skill>
            </div>
          </div>
          <div>
            <div className="my-3 text-center">Frontend</div>
            <div className="grid grid-cols-4 gap-3">
              <Skill imgSrc="/skills/svelte">Svelte</Skill>
              <Skill imgSrc="/skills/svelte">SvelteKit</Skill>
              <Skill imgSrc="/skills/reactjs">React.js</Skill>
              <Skill imgSrc="/skills/next" dualTone>
                Next.js
              </Skill>
            </div>
          </div>
          <div>
            <div className="my-3 text-center">Backend</div>
            <div className="grid grid-cols-4 gap-3">
              <Skill imgSrc="/skills/express" dualTone>
                Express.js
              </Skill>
              <Skill imgSrc="/skills/node">Node.js</Skill>
            </div>
          </div>
          <div>
            <div className="my-3 text-center">Databases</div>
            <div className="grid grid-cols-4 gap-3">
              <Skill imgSrc="/skills/firestore">Cloud Firestore</Skill>
              <Skill imgSrc="/skills/postgresql">PostgreSQL</Skill>
              <Skill imgSrc="/skills/mysql">MySQL</Skill>
              <Skill imgSrc="/skills/mongodb">MongoDB</Skill>
            </div>
          </div>
          <div>
            <div className="my-3 text-center">Tools & Platforms</div>
            <div className="grid grid-cols-4 gap-3">
              <Skill imgSrc="/skills/git">Git</Skill>
              <Skill imgSrc="/skills/github" dualTone>
                GitHub
              </Skill>
              <Skill imgSrc="/skills/elasticsearch">ElasticSearch</Skill>
              <Skill imgSrc="/skills/cypress" dualTone>
                Cypress
              </Skill>
              <Skill imgSrc="/skills/playwright">Playwright</Skill>
              <Skill imgSrc="/skills/figma">Figma</Skill>
              <Skill imgSrc="/skills/tailwind-css">Tailwind CSS</Skill>
              <Skill imgSrc="/skills/material-ui">Material UI</Skill>
              <Skill imgSrc="/skills/bootstrap">Bootstrap</Skill>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
