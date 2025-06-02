import PortfolioItem from './PortfolioItem'

export default function MyVirtualCookbook() {
  return (
    <PortfolioItem
      title="MyVirtualCookbook"
      url="https://my-virtual-cookbook.vercel.app/"
      description="MyVirtualCookbook is a web app that lets users add links to recipes to their cookbook and organize them into sections called chapters. Users can add notes to recipes which are saved and tied to the recipe. MyVirtualCookbook was built using React, Next.js, Firebase Authentication, Cloud Firestore, Material UI, and Tailwind CSS."
      posterSrc="MyVirtualCookbookPoster.png"
      src="MyVirtualCookbook.mp4"
    />
  )
}
