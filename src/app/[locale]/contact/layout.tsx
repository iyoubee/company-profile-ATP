import { Metadata } from 'next'
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'id' }]
}

interface ContactProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export const generateMetadata = ({ params }: ContactProps): Metadata => {
  const title = params.locale == 'en' ? 'Contact' : 'Kontang'
  return {
    title: `${title} | ATP`,
  }
}

export default async function AboutUsLayout({ children }: ContactProps) {
  return <>{children}</>
}
