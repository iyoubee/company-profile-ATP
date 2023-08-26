import { HeroProductDetail, ProductDetailSection } from '@/components'

export default function ProductDetail() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <HeroProductDetail />
      <ProductDetailSection />
    </main>
  )
}
