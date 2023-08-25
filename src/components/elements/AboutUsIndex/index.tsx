'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import { Reveal } from '../Reveal'

export const AboutUsIndex: React.FC = () => {
  const t = useTranslations('Index.about')

  return (
    <>
      <div className="relative">
        <div className="w-full absolute xl:top-60 ">
          <div className="aspect-map w-full relative">
            <Image
              src={'/indonesia.svg'}
              alt="Assets"
              fill
              className="object-cover relative"
            />
          </div>
        </div>
        <div className="w-full p-20">
          <Reveal>
            <p className="text-[#83764F] font-bold text-[48px]">{t('title')}</p>
          </Reveal>
          <Reveal>
            <p className="text-[#294696] font-bold text-[64px]">{t('comp')}</p>
          </Reveal>
          <div className="w-full flex mt-[32px] h-[468px] relative">
            <div className="w-2/5 relative px-10">
              <Image
                src={'/kopi.svg'}
                fill
                className="object-contain relative"
                alt="Assets"
              />
              <div className="absolute bg-[#294696] text-[#E9E0D7] rounded-[16px] flex left-2/3 divide-x-2 -bottom-10">
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
            <div className="w-3/5 flex flex-col gap-[16px] items-end">
              <Reveal>
                <p className="text-[#525C60] font-medium text-[18px]">
                  {t('desc1')}
                </p>
              </Reveal>
              <Reveal>
                <p className="text-[#525C60] font-medium text-[18px]">
                  {t('desc2')}
                </p>
              </Reveal>
              <Reveal>
                <button className="text-[#294696] text-[20px] font-extrabold leading-[22px] border-4 border-[#294696] px-6 py-4 rounded-full">
                  {t('button')}
                </button>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
