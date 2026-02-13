export default function Hero() {
  return (
    <section className="@container relative h-78 bg-gradient-to-br from-blue-400 via-purple-300 to-indigo-400 dark:from-indigo-800 dark:via-purple-800 dark:to-blue-700  flex items-center justify-between px-8 md:px-20 py-20">
      <div>
        <h1 className="text-5xl font-bold mb-2">Jamie Smart</h1>
        <h2 className="text-2xl opacity-90 mb-6">Software Engineer</h2>
        <p className="mb-8 opacity-90">
          Building modern web experiences with TypeScript, React, Next.js, Node.js, and Python
        </p>
      </div>
      <div
        className="absolute right-0 h-78 opacity-15 bg-size-[cover] mask-r-from-0% rotate-y-180 @max-[475px]:w-43.75 @max-[1040px]:w-87.5 w-118.75"
        style={{
          backgroundImage: 'url(engineer-overseeing-data-center-making-routine-improvements.jpg)'
        }}></div>
    </section>
  )
}
