'use client'
import React from 'react'
import { useTranslations } from 'next-intl'

export const HeroIndex: React.FC = () => {
  const t = useTranslations('Index.hero')
  return (
    <>
      <section className=' h-fit bg-[url("/heroIndexAssets.svg")] bg-no-repeat bg-cover relative'>
        <div className="p-20 pb-60 w-full">
          <div className="w-2/3 flex flex-col gap-[24px]">
            <p className="text-[#E9E0D7] text-[64px] font-bold leading-[80px]">
              Where <span className="text-[#D6E8F2]">Sustainability</span> and{' '}
              <span className="text-[#D6E8F2]">Quality</span> Meet.
            </p>
            <p className="text-[#E9E0D7] font-medium text-[24px]">
              {t('desc')}
            </p>
            <button className="rounded-full bg-[#294696] text-[20px] font-bold leading-[22px] text-[#D6E8F2] px-[36px] py-[15px] w-fit flex-none z-20">
              {t('button')}
            </button>
          </div>
        </div>
        <div className="h-2/3 bg-gradient-to-t from-white absolute bottom-0 w-full z-10"></div>
      </section>
    </>
  )
}
