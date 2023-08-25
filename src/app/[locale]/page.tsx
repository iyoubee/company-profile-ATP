import { AboutUsIndex, HeroIndex, ProductIndex, ValueIndex } from '@/components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <HeroIndex />
      <AboutUsIndex />
      <ProductIndex />
      <ValueIndex />
    </main>
  )
}
