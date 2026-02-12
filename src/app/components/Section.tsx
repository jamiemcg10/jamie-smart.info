import { ReactNode } from 'react'

interface SectionProps {
  title: string
  subtitle?: string
  children: ReactNode
}

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <div className="p-16 border-b-1 border-b-gray-500">
      <div className="border-b-2 border-b-gray-400 mb-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <span>{subtitle}</span>
      </div>
      <div className="@container">{children}</div>
    </div>
  )
}
