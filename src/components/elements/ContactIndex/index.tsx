'use client'
import React from 'react'
import { Reveal } from '../Reveal'
import { useTranslations } from 'next-intl'
import { LocationIndex } from '../LocationIndex'
export const ContactIndex: React.FC = () => {
  const t = useTranslations('Contact')

  return (
    <>
      <section className="h-fit bg-white bg-cover relative p-12 flex flex-col gap-8">
        <Reveal>
          <div className="flex justify-center text-center">
            <div className="">
              <p className="text-[#294696] text-[32px] md:text-[64px] leading-[43.2px] md:leading-[86px] font-bold text-center md:text-start">
                {t('title')}
              </p>
              <p className="font-semo text-base md:text-xl text-[#63A3C7]">
                {t('desc')}
              </p>
            </div>
          </div>
        </Reveal>
        <div>
          <LocationIndex />
        </div>
      </section>
    </>
  )
}
