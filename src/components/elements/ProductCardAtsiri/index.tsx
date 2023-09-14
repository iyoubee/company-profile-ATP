'use client'
import { useTranslations } from 'next-intl'
import React from 'react'

export const ProductCardAtsiri: React.FC = () => {
  const t = useTranslations('Product')

  return (
    <>
      <div className="w-full">
        <div className="w-full h-[455px] rounded-3xl translate-y-8 bg-[url('/atsiribg.jpg')] bg-cover bg-no-repeat"></div>
        <div className=" w-full rounded-b-3xl bg-[#294696] flex flex-col justify-between p-[36px] pt-[64px]">
          <p className="text-[#E9E0D7] font-medium text-[12.5px] md:text-[16px]">
            {t('atsiri')}
          </p>
          <div className="w-full flex justify-end mt-2">
            <button className="font-bold md:text-[20px] text-xs text-[#E9E0D7] hover:bg-[#E9E0D7] hover:text-[#294696] border-[#E9E0D7] border-4 px-10 py-2 rounded-full">
              {t('button2')}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
