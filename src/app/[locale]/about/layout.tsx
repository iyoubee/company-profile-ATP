import { Metadata } from 'next'
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'id' }]
}

interface AboutUsProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export const generateMetadata = ({ params }: AboutUsProps): Metadata => {
  const title = params.locale == 'en' ? 'About' : 'Tentang'
  return {
    title: `${title} | ATP`,
  }
}

export default async function AboutUsLayout({ children }: AboutUsProps) {
  return <>{children}</>
}
