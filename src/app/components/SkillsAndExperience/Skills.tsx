import Skill from './Skill'
import Subheading from '../Subheading'

export default function Skills() {
  return (
    <div className="w-full sm:w-auto">
      <Subheading>Skills</Subheading>
      <div className="flex flex-col gap-8">
        <div>
          <div className="my-3 text-center">Languages</div>
          <div className="grid grid-cols-4 gap-3">
            <Skill imgSrc="/skills/typescript.svg">Typescript</Skill>
            <Skill imgSrc="/skills/javascript.svg">Javascript</Skill>
            <Skill imgSrc="/skills/python.svg">Python</Skill>
            <Skill imgSrc="/skills/java.svg">Java</Skill>
            <Skill imgSrc="/skills/html.svg">HTML5</Skill>
            <Skill imgSrc="/skills/css.svg">CSS</Skill>
            <Skill imgSrc="/skills/scss.svg">SCSS</Skill>
          </div>
        </div>
        <div>
          <div className="my-3 text-center">Frontend</div>
          <div className="grid grid-cols-4 gap-3">
            <Skill imgSrc="/skills/svelte.svg">Svelte</Skill>
            <Skill imgSrc="/skills/svelte.svg">SvelteKit</Skill>
            <Skill imgSrc="/skills/reactjs.svg">React.js</Skill>
            <Skill imgSrc="/skills/next.svg">Next.js</Skill>
          </div>
        </div>
        <div>
          <div className="my-3 text-center">Backend</div>
          <div className="grid grid-cols-4 gap-3">
            <Skill imgSrc="/skills/express.svg">Express.js</Skill>
            <Skill imgSrc="/skills/node.svg">Node.js</Skill>
            <Skill imgSrc="/skills/firestore.svg">Cloud Firestore</Skill>
            <Skill imgSrc="/skills/elasticsearch.svg">ElasticSearch</Skill>
            <Skill imgSrc="/skills/postgresql.svg">PostgreSQL</Skill>
            <Skill imgSrc="/skills/mysql.svg">MySQL</Skill>
            <Skill imgSrc="/skills/mongodb.svg">MongoDB</Skill>
          </div>
        </div>
        <div>
          <div className="my-3 text-center">Tools & Platforms</div>
          <div className="grid grid-cols-4 gap-3">
            <Skill imgSrc="/skills/git.svg">Git</Skill>
            <Skill imgSrc="/skills/github.svg">GitHub</Skill>
            <Skill imgSrc="/skills/cypress.svg">Cypress</Skill>
            <Skill imgSrc="/skills/playwright.svg">Playwright</Skill>
            <Skill imgSrc="/skills/figma.svg">Figma</Skill>
            <Skill imgSrc="/skills/linear.svg">Linear</Skill>
            <Skill imgSrc="/skills/tailwind-css.svg">Tailwind CSS</Skill>
            <Skill imgSrc="/skills/material-ui.svg">Material UI</Skill>
            <Skill imgSrc="/skills/bootstrap.svg">Bootstrap</Skill>
          </div>
        </div>
      </div>
    </div>
  )
}
