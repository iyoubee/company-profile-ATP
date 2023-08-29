import { AboutUs, HeroAboutUsIndex } from '@/components'

export default function Product() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white gap-4">
      <HeroAboutUsIndex />
      <AboutUs />
    </main>
  )
}
