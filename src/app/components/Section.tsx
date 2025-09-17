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
      <div className="mb-4 p-4 sm:p-12 border rounded-md bg-indigo-300 border-[#001024]/20 dark:border-indigo-300/20 dark:bg-[#001024]">
        <div className="text-3xl mb-8 font-semibold">{title}</div>
        <div className="space-y-16">{children}</div>
      </div>
    </div>
  )
}
