export default function TimelineSegment() {
  return (
    <div className="flex flex-col py-2">
      <div className="bg-green-950 group-hover:bg-green-700 group-hover:shadow-(--timeline-shadow) transition-all border border-white rounded-4xl w-2.5 h-2.5"></div>
      <div className="w-px place-self-center border-r border-r-white grow group-hover:shadow-(--timeline-shadow) transition-all"></div>
    </div>
  )
}
