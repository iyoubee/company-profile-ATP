'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { Reveal } from '../Reveal'
import Image from 'next/image'
import { SliderAboutUs } from '../SliderAboutUs'

export const HeroAboutUsIndex: React.FC = () => {
  const t = useTranslations('About.hero')
  return (
    <>
      <section className=' h-fit bg-[url("/AboutUsIndexAsset.svg")] bg-cover relative'>
        <div className="md:p-20 p-5 pb-60 w-full flex justify-center relative z-20">
          <div className="   w-full flex flex-col gap-[24px]">
            <Reveal>
              <p className="text-[#E9E0D7] md:text-6xl text-4xl font-bold leading-[48.6px] md:leading-[80px] flex justify-center">
                {t('title')}
              </p>
            </Reveal>
            <Reveal>
              <p className="text-[#E9E0D7] font-semibold md:text-2xl text-xl flex justify-center">
                {t('moto')}
              </p>
            </Reveal>
            <Reveal>
              <div className="flex justify-center">
                <Image
                  src={'/AboutUsClock.svg'}
                  alt="AboutUsClock"
                  width={300}
                  height={300}
                />
              </div>
            </Reveal>
            <Reveal>
              <p className="text-[#D6E8F2] md:text-3xl text-xl font-bold leading-[48.6px] md:leading-[80px] flex justify-center">
                {t('story')}
              </p>
            </Reveal>
            <Reveal>
              <p className="text-[#D6E8F2] font-semibold md:text-xl text-lg flex justify-center">
                {t('story-word')}
              </p>
            </Reveal>
            <SliderAboutUs />
          </div>
        </div>
      </section>
      <div className="h-2/3 bg-gradient-to-t from-white absolute bottom-0 w-full z-10]"></div>
    </>
  )
}
