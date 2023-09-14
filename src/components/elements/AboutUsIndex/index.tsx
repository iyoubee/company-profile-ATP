'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import { Reveal } from '../Reveal'

export const AboutUsIndex: React.FC = () => {
  const t = useTranslations('Index.about')

  return (
    <>
      <div className="w-full md:p-20 p-5 relative">
        <Image
          src={'/indonesia.svg'}
          alt="Assets"
          fill
          className="object-cover relative aspect-map w-full hidden lg:block mt-40"
        />
        <Reveal>
          <p className="text-[#83764F] font-bold md:text-[48px] text-[24px]">
            {t('title')}
          </p>
        </Reveal>
        <Reveal>
          <p className="text-[#294696] font-bold md:text-[64px] text-[32px]">
            {t('comp')}
          </p>
        </Reveal>
        <div className="w-full flex mt-[32px] xl:h-[468px] relative flex-col xl:flex-row">
          <div className="xl:w-2/5 w-full h-[338px] xl:h-auto relative px-10">
            <Image
              src={'/kopi.svg'}
              fill
              className="object-contain relative"
              alt="Assets"
            />
            <div className="absolute bg-[#294696] text-[#E9E0D7] rounded-[16px] xl:flex left-2/3 divide-x-2 -bottom-32 2xl:-bottom-10 hidden">
              <Reveal>
                <div className="w-[283px] px-[32px] py-[24px] flex items-center gap-2">
                  <p className="text-[36px] font-bold">1200+</p>
                  <p className="font-semibold text-[16px]">{t('partners')}</p>
                </div>
              </Reveal>
              <Reveal>
                <div className="w-[294px] px-[32px] py-[24px] flex items-center gap-2">
                  <p className="text-[36px] font-bold">26+</p>
                  <p className="font-semibold text-[16px]">{t('prod')}</p>
                </div>
              </Reveal>
              <Reveal>
                <div className="w-[308px] px-[32px] py-[24px] flex items-center gap-2">
                  <p className="text-[36px] font-bold">25+</p>
                  <p className="font-semibold text-[16px]">{t('country')}</p>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal>
            <div className="bg-[#294696] text-[#E9E0D7] rounded-[16px] flex divide-x-2 xl:hidden w-full mt-[16px]">
              <div className="w-1/3 md:p-[16px] p-2">
                <p className="text-base md:text-[36px] font-bold">1200+</p>
                <p className="font-semibold text-xs md:text-[16px] mt-1">
                  {t('partners')}
                </p>
              </div>
              <div className="w-1/3 md:p-[16px] p-2">
                <p className="text-base md:text-[36px] font-bold">26+</p>
                <p className="font-semibold text-xs md:text-[16px] mt-1">
                  {t('prod')}
                </p>
              </div>
              <div className="w-1/3 md:p-[16px] p-2">
                <p className="text-base md:text-[36px] font-bold">25+</p>
                <p className="font-semibold text-xs md:text-[16px] mt-1">
                  {t('country')}
                </p>
              </div>
            </div>
          </Reveal>
          <div className="xl:w-3/5 w-full flex flex-col gap-[16px] items-end mt-10 xl:mt-0">
            <Reveal>
              <p className="text-[#525C60] font-medium md:text-[18px] text-[12px] text-justify">
                {t('desc1')}
              </p>
            </Reveal>
            <Reveal>
              <p className="text-[#525C60] font-medium md:text-[18px] text-[12px] text-justify">
                {t('desc2')}
              </p>
            </Reveal>
            <Reveal>
              <button className="text-[#294696] text-[20px] hover:bg-[#294696] hover:text-white focus:bg-[#294696] focus:text-white font-extrabold leading-[22px] border-4 border-[#294696] px-6 py-4 rounded-full w-full">
                {t('button')}
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  )
}
