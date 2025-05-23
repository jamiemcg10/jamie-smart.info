import { ReactNode } from 'react'

interface SectionProps {
  title: string
  children?: ReactNode
}

export default function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-4 p-8 border rounded-md bg-indigo-300 border-[#001024] dark:border-indigo-300 dark:bg-[#001024]">
      <div className="text-3xl mb-4 font-semibold">{title}</div>
      <div className="space-y-8">{children}</div>
    </div>
  )
}
