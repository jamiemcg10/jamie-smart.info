import { ReactNode } from 'react'

interface SubheadingProps {
  children: ReactNode
}

export default function Subheading({ children }: SubheadingProps) {
  return <div className="text-xl font-medium">{children}</div>
}
