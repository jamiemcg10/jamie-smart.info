import GitHubLink from './components/GitHubLink'
import MountainComparer from './components/MountainComparer'
import MyVirtualCookbook from './components/MyVirtualCookbook'
import ResumeLink from './components/ResumeLink'
import Section from './components/Section'
import Skills from './components/Skills'
import Summary from './components/Summary'

export default function Home() {
  return (
    <>
      <div className="p-4 sm:p-16">
        <div className="h-20 mb-2 text-center text-5xl sm:text-6xl font-semibold">Jamie Smart</div>
        <Section title="About me">
          <Summary />
          <Skills />
          <ResumeLink />
        </Section>
        <Section title="Portfolio">
          <MyVirtualCookbook />
          <MountainComparer />
          <GitHubLink />
        </Section>
      </div>
    </>
  )
}
