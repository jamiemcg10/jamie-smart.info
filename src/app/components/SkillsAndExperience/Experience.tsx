import Subheading from '../Subheading'
import BH3 from './BH3'
import Latitude from './Latitude'

export default function Experience() {
  return (
    <div className="relative">
      <div className="absolute -mt-12" id="experience"></div>
      <div className="w-full sm:w-2/3 mt-8 sm:mt-0" id="experience">
        <Subheading>Experience</Subheading>
        <div className="mt-6">
          <Latitude />
          <BH3 />
        </div>
      </div>
    </div>
  )
}
