import PortfolioItem from './PortfolioItem'

export default function MyVirtualCookbook() {
  return (
    <PortfolioItem
      title="MyVirtualCookbook"
      url="https://my-virtual-cookbook.vercel.app/"
      gitHubUrl="https://github.com/jamiemcg10/MyVirtualCookbook"
      description="MyVirtualCookbook is a web app that lets users add links to recipes to their cookbook and organize them into sections called chapters. Users can add notes to recipes which are saved and tied to the recipe. MyVirtualCookbook was built using React, Next.js, Firebase Authentication, and Cloud Firestore."
      posterSrc="MyVirtualCookbookPoster.png"
      src="MyVirtualCookbook.mp4"
    />
  )
}
