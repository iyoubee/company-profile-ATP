import type { Metadata } from 'next'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'id' }]
}

interface ProductLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export const generateMetadata = ({ params }: ProductLayoutProps): Metadata => {
  const title = params.locale == 'en' ? 'Product' : 'Produk'
  const description =
    params.locale == 'en'
      ? 'ATP Corp is a company engaged in agriculture, plantations and agro-tourism. We have a variety of superior products, including Aceng Coffee, Clove Leaf Essential Oil, and Tepas Papandayan Agrotourism.'
      : 'PT ATP adalah perusahaan yang bergerak di bidang pertanian, perkebunan, dan agrowisata. Kami memiliki berbagai produk unggulan, antara lain Kopi Aceng, Minyak Atsiri Daun Cengkeh, dan Agrowisata Tepas Papandayan.'
  return {
    title: `${title} | ATP`,
    description,
  }
}

export default async function ProductLayout({ children }: ProductLayoutProps) {
  return <>{children}</>
}
