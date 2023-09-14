'use client'
import Image from 'next/image'
import React from 'react'
import { Reveal } from '../Reveal'
import { useTranslations } from 'next-intl'
import Slider from 'react-slick'

export const AboutUsProduct: React.FC = () => {
  const t = useTranslations('About.product')

  return (
    <>
      <section className="h-fit bg-[#294696] bg-cover relative p-12 2xl:px-60 md:px-20">
        <div
          className="w-full flex flex-col md:flex-row justify-between gap-10"
          id="history"
        >
          <div className="w-full md:w-1/2">
            <Reveal>
              <p className=" text-[#D6E8F2] text-[48px] leading-[64.8px] font-bold mb-5">
                {t('title')}
              </p>
            </Reveal>
            <Reveal>
              <p className=" text-[#E9E0D7] text-lg font-medium mb-5 z-20">
                {t('desc')}
              </p>
            </Reveal>
          </div>
          <div className="w-full md:w-1/2 z-20">
            <Slider
              infinite
              speed={1000}
              arrows={true}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay
              autoplaySpeed={10000}
              dots
            >
              <div className="w-fit aspect-[2/1] relative bg-[#D6E8F2] p-6 rounded-2xl">
                <div className="relative h-[400px] w-full">
                  <Image
                    src={'/bisnis1.jpg'}
                    fill
                    alt="placeholder"
                    className="object-cover relative"
                  />
                </div>
              </div>
              <div className="w-fit aspect-[2/1] relative bg-[#D6E8F2] p-6 rounded-2xl">
                <div className="relative h-[400px] w-full">
                  <Image
                    src={'/bisnis2.jpg'}
                    fill
                    alt="placeholder"
                    className="object-cover relative"
                  />
                </div>
              </div>
              <div className="w-fit aspect-[2/1] relative bg-[#D6E8F2] p-6 rounded-2xl">
                <div className="relative h-[400px] w-full">
                  <Image
                    src={'/bisnis3.jpg'}
                    fill
                    alt="placeholder"
                    className="object-cover relative"
                  />
                </div>
              </div>
              <div className="w-fit aspect-[2/1] relative bg-[#D6E8F2] p-6 rounded-2xl">
                <div className="relative h-[400px] w-full">
                  <Image
                    src={'/bisnis4.png'}
                    fill
                    alt="placeholder"
                    className="object-cover relative"
                  />
                </div>
              </div>
            </Slider>
          </div>
          <Image src={'/Vector.svg'} fill className="z-0" alt="Assets" />
        </div>
      </section>
    </>
  )
}
