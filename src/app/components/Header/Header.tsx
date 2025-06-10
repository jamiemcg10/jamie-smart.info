import Image from 'next/image'
import DesktopMenu from './DesktopMenu'

export default function Header() {
  return (
    <div
      className="z-1 bg-indigo-300/20 items-center h-16 backdrop-blur-sm fixed w-full top-0 flex justify-between border-b border-b-indigo-300 px-8
    ">
      <div className="w-9 h-9">
        <Image src="/logo.ico" alt="logo" width="64" height="64" />
      </div>

      <DesktopMenu />
    </div>
  )
}
