import type { Metadata } from 'next'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'id' }]
}

interface ProductLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
    product: string
  }
}

export const generateMetadata = ({ params }: ProductLayoutProps): Metadata => {
  const title = params.locale == 'en' ? 'Product' : 'Produk'
  return {
    title: `Atsiri | ${title} | ATP`,
  }
}

export default async function AtsiriLayout({ children }: ProductLayoutProps) {
  return <>{children}</>
}
