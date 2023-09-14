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
  const product = params.locale == 'en' ? 'Coffee' : 'Kopi'

  const title = params.locale == 'en' ? 'Product' : 'Produk'
  return {
    title: `${product} | ${title} | ATP`,
  }
}

export default async function CofeeLayout({ children }: ProductLayoutProps) {
  return <>{children}</>
}
