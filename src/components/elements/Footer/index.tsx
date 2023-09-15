'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import React from 'react'
import { useLanguageContext } from '@/components/contexts'

export const Footer: React.FC = () => {
  const t = useTranslations('Footer')
  const { language } = useLanguageContext()
  return (
    <>
      <footer className="footer bg-[#294696] relative border-b-2 border-blue-700 lg:items-center flex flex-col">
        <div className="container px-3">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col lg:flex-row justify-between gap-4">
              <div className="flex flex-col w-full">
                <div className="text-[#D6E8F2] items-center font-bold text-2xl md:text-3xl mb-2 flex gap-2">
                  <div className="">
                    <Image
                      className=""
                      alt="CompanyLogo"
                      width={50}
                      height={50}
                      src={'/FooterLogo.svg'}
                    />
                  </div>
                  PT. Aceng Tunggal Perkasa
                </div>
                <span className=" font-medium">
                  <p className="text-[#D6E8F2]  text-md">
                    Sustainably sourced, ethically processed, and made for your
                    satisfaction.
                  </p>
                </span>
              </div>
              <div className="flex flex-col w-full lg:w-2/4">
                <span className="text-[#D6E8F2] font-bold text-2xl md:text-3xl mb-2">
                  {t('temui')}
                </span>
                <span className=" font-medium">
                  <p className="text-[#D6E8F2]  text-md  ">
                    Kedai Kopi Aceng, Jalan Agrowisata Tepas Papandayan Desa
                    Kramatwangi Kecamatan Cisurupan-Garut
                  </p>
                </span>
              </div>
              <div className="flex flex-col  w-full lg:w-1/3 lg:translate-x-8">
                <span className="text-[#D6E8F2] font-bold text-2xl md:text-3xl mb-2">
                  {t('informasi.title')}
                </span>
                <span className=" font-medium">
                  <a
                    href={'/' + language + '/about'}
                    className="text-[#D6E8F2]  text-md hover:text-blue-500"
                  >
                    {t('informasi.tentang')}
                  </a>
                </span>
                <span className=" font-medium">
                  <a
                    href={'/' + language + '/product'}
                    className="text-[#D6E8F2]  text-md hover:text-blue-500"
                  >
                    {t('informasi.produk')}
                  </a>
                </span>
                <span className=" font-medium">
                  <a
                    href={'/' + language + '/contact'}
                    className="text-[#D6E8F2]  text-md hover:text-blue-500"
                  >
                    {t('informasi.kontak')}
                  </a>
                </span>
              </div>
              <div className="flex justify-normal w-full lg:w-3/5 ">
                <div className="flex flex-col lg:translate-x-8">
                  <span className="text-[#D6E8F2] font-bold text-2xl md:text-3xl mb-2">
                    {t('kontak')}
                  </span>
                  <span className=" font-medium">
                    <p className="text-[#D6E8F2] text-md">
                      pt.atpidn@gmail.com
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container md:px-9 sm:px-9 px-2 lg:px-10 ">
          <div className="mt-4 flex flex-col">
            <div className="py-6">
              <p className="text-sm text-white font-bold mb-2">
                © 2023, PT. Aceng Tunggal Perkasa
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
