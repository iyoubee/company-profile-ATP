'use client'
import { useLanguageContext } from '@/components/contexts'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

export const ProductCardCoffee: React.FC = () => {
  const t = useTranslations('Product')
  const { language } = useLanguageContext()

  return (
    <>
      <div className="w-full">
        <div className="w-full h-[455px] rounded-3xl translate-y-8 bg-[url('/kopibg.jpg')] bg-cover bg-no-repeat"></div>
        <div className="w-full rounded-b-3xl bg-[#83764F] flex flex-col justify-between p-[36px] pt-[64px]">
          <p className="text-[#E9E0D7] font-medium text-[12.5px] md:text-[16px]">
            {t('kopi')}
          </p>
          <div className="w-full flex justify-end mt-2">
            <Link href={'/' + language + '/product/coffee'}>
              <button className="font-bold md:text-[20px] text-xs text-[#E9E0D7] hover:bg-[#E9E0D7] hover:text-[#294696] border-[#E9E0D7] border-4 px-10 py-2 rounded-full">
                {t('button2')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
