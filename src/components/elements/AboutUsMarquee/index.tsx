'use client'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
export const AboutUsMarquee: React.FC = () => {
  const t = useTranslations('About.marquee')
  return (
    <>
      <section className="h-fit  bg-cover relative py-12 flex flex-col gap-8">
        <div className=" pt-20 flex justify-center">
          <p className=" font-bold text-[#294696] text-6xl">{t('title')}</p>
        </div>
        <div>
          <Marquee className="" autoFill>
            <div className="bg-[#73A1C3] p-6 rounded-lg mx-2">
              <Image
                src={'/Marquee1.svg'}
                width={200}
                height={200}
                alt="placeholder"
                className=""
              />
            </div>
            <div className="bg-[#73A1C3] p-6 rounded-lg mx-2">
              <Image
                src={'/Marquee2.svg'}
                width={200}
                height={200}
                alt="placeholder"
                className=""
              />
            </div>
            <div className="bg-[#73A1C3] p-6 rounded-lg mx-2">
              <Image
                src={'/Marquee3.svg'}
                width={200}
                height={200}
                alt="placeholder"
                className=""
              />
            </div>
            <div className="bg-[#73A1C3] p-6 rounded-lg mx-2">
              <Image
                src={'/Marquee4.svg'}
                width={200}
                height={200}
                alt="placeholder"
                className=""
              />
            </div>
          </Marquee>
          <div className=" bg-gray-500 h-[100px] relative -translate-y-10"></div>
        </div>
      </section>
    </>
  )
}
