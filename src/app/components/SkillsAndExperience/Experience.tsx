import Subheading from '../Subheading'
import BH3 from './BH3'
import Latitude from './Latitude'

export default function Experience() {
  return (
    <div className="w-full sm:w-2/3 mt-8 sm:mt-0">
      <Subheading>Experience</Subheading>
      <div className="mt-6">
        <Latitude />
        <BH3 />
      </div>
    </div>
  )
}
