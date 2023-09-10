import {
  AboutUsIndex,
  ContactIndex,
  HeroIndex,
  PartnerIndex,
  ProductIndex,
  ValueIndex,
} from '@/components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <HeroIndex />
      <AboutUsIndex />
      <ProductIndex />
      <ValueIndex />
      <PartnerIndex />
      <ContactIndex />
    </main>
  )
}
