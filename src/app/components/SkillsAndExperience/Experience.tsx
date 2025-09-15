import Subheading from '../Subheading'
import { experience } from './experience'
import ExperienceItem from './ExperienceItem'

export default function Experience() {
  const { BH3, Latitude } = experience

  return (
    <div className="relative sm:w-2/3">
      <div className="absolute -mt-12" id="experience"></div>
      <div className="w-full mt-8 sm:mt-0" id="experience">
        <Subheading>Experience</Subheading>
        <div className="mt-6">
          <ExperienceItem
            title={Latitude.title}
            company={Latitude.company}
            dates={Latitude.dates}
            bullets={Latitude.bullets}
          />
          <div className="h-4"></div>
          <ExperienceItem
            title={BH3.title}
            company={BH3.company}
            dates={BH3.dates}
            bullets={BH3.bullets}
          />
        </div>
      </div>
    </div>
  )
}
