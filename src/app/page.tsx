import Footer from './components/Footer'
import Header from './components/Header/Header'
import MountainComparer from './components/Portfolio/MountainComparer'
import MyVirtualCookbook from './components/Portfolio/MyVirtualCookbook'
import ResumeLink from './components/ResumeLink'
import Section from './components/Section'
import Skills from './components/Skills'
import Summary from './components/Summary'

export default function Home() {
  return (
    <>
      <Header />
      <div className="p-4 sm:p-16 mt-8">
        <div className="h-32 mb-2 text-5xl sm:text-6xl font-semibold content-center">
          Jamie Smart
        </div>
        <Section title="About me" href="about">
          <Summary />
          <Skills />
          <ResumeLink />
        </Section>
        <Section title="Portfolio" href="portfolio">
          <MyVirtualCookbook />
          <MountainComparer />
        </Section>
        <Footer />
      </div>
    </>
  )
}
