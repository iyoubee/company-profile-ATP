export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'id' }]
}

interface AboutUsProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function AboutUsLayout({ children }: AboutUsProps) {
  return <>{children}</>
}
