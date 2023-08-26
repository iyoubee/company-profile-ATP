import { HeroProduct, ProductSection } from '@/components'

export default function Product() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <HeroProduct />
      <ProductSection />
    </main>
  )
}
