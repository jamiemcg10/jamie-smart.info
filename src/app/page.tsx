import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Hero from './components/Header/Hero'
import Portfolio from './components/Portfolio/Portfolio'
import ResumeLink from './components/ResumeLink'
import Skills from './components/Skills'
import SkillsAndExperience from './components/SkillsAndExperience/SkillsAndExperience'

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
