export default function TimelineSegment() {
  return (
    <div className="flex flex-col py-2">
      <div className="bg-green-950 group-hover:bg-green-700 group-hover:shadow-(--timeline-shadow) transition-all border-3 border-white rounded-4xl w-4 h-4"></div>
      <div className="w-px place-self-center border-r-4 border-r-white grow group-hover:shadow-(--timeline-shadow) transition-all"></div>
    </div>
  )
}
