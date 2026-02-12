import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Hero from './components/Header/Hero'
import Portfolio from './components/Portfolio'
import MioCrew from './components/Portfolio/MioCrew'
import MountainComparer from './components/Portfolio/MountainComparer'
import MyVirtualCookbook from './components/Portfolio/MyVirtualCookbook'
import ResumeLink from './components/ResumeLink'
import Skills from './components/Skills'
import SkillsAndExperience from './components/SkillsAndExperience/SkillsAndExperience'
import Summary from './components/Summary'

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Skills />
      <About />
      <Footer />
    </>
  )
}
