import {
  AboutUs,
  AboutUsMarquee,
  AboutUsProduct,
  HeroAboutUsIndex,
} from '@/components'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white gap-4">
      <HeroAboutUsIndex />
      <AboutUs />
      <AboutUsProduct />
      <AboutUsMarquee />
    </main>
  )
}
