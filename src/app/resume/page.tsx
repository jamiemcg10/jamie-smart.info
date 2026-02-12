import { redirect } from 'next/navigation'

export default function Resume() {
  return <iframe src="Jamie_Smart_Resume.pdf"></iframe>
  return <embed src="Jamie_Smart_Resume.pdf" type="application/pdf" width="100%" height="100vh" />
}
