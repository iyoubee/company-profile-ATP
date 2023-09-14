'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import { Reveal } from '../Reveal'

export const AboutUsIndex: React.FC = () => {
  const t = useTranslations('Index.about')

  return (
    <>
      <div className="w-full md:p-20 p-5 relative 2xl:px-60">
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
          </div>

          <div className="xl:w-3/5 flex flex-col justify-between">
            <div className="w-full flex flex-col gap-[16px] items-end mt-10 xl:mt-0">
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
            </div>
            <Reveal>
              <div className="w-full justify-end flex">
                <button className="text-[#294696] text-[20px] hover:bg-[#294696] hover:text-white focus:bg-[#294696] focus:text-white font-extrabold leading-[22px] border-4 border-[#294696] px-6 py-4 rounded-full w-fit">
                  {t('button')}
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  )
}
