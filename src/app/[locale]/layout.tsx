import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import RootStyleRegistry from '@/emotion'
import { Navbar } from '@/components'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'id' }]
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export const generateMetadata = ({ params }: LocaleLayoutProps): Metadata => {
  const description =
    params.locale == 'en'
      ? 'With a proven track record in the coffee and essential oil market, we are determined to grow our business further.'
      : 'Dengan rekam jejak yang terbukti di pasar kopi dan minyak esensial (Atsiri), kami bertekad untuk mengembangkan bisnis kami lebih jauh.'
  return {
    title: 'Home | ATP',
    description,
  }
}

const sans = DM_Sans({ subsets: ['latin'] })

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={sans.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <RootStyleRegistry>
            <div className="flex justify-center w-full bg-gradient-to-r from-[#BFE0FF] via-[#C7FFFF] to-[#FFFDC7]">
              <div className="relative max-w-[1536px] flex-none w-full text-black">
                <Navbar />
                {children}
              </div>
            </div>
          </RootStyleRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
