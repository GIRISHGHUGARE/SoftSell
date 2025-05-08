import ThemeToggle from '../components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center">
      <ThemeToggle />
    </main>
  )
}
