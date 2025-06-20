import { ReactNode } from 'react'

interface SectionProps {
  title: string
  href: string
  children?: ReactNode
}

export default function Section({ title, href, children }: SectionProps) {
  return (
    <div className="relative">
      <div className="absolute -mt-20" id={href}></div>
      <div className="mb-4 p-4 sm:p-8 border rounded-md bg-indigo-300 border-[#001024] dark:border-indigo-300 dark:bg-[#001024]">
        <div className="text-3xl mb-8 font-semibold">{title}</div>
        <div className="space-y-8">{children}</div>
      </div>
    </div>
  )
}
