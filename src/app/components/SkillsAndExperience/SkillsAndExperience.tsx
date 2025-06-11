import Experience from './Experience'
import Skills from './Skills'

export default function SkillsAndExperience() {
  return (
    <div className="flex flex-col sm:flex-row justify-between sm:space-x-16">
      <Skills />
      <Experience />
    </div>
  )
}
