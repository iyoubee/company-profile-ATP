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
      <section className="h-fit bg-[#294696] bg-cover relative p-12">
        <div
          className="w-full flex flex-col md:flex-row justify-between "
          id="history"
        >
          <div className="w-full md:w-1/3">
            <Reveal>
              <p className=" text-[#D6E8F2] text-[48px] leading-[64.8px] font-bold mb-5">
                {t('title')}
              </p>
            </Reveal>
            <Reveal>
              <p className=" text-[#E9E0D7] text-lg font-medium mb-5">
                {t('desc')}
              </p>
            </Reveal>
          </div>
          <div className="w-full md:w-5/12 z-20">
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
                    src={'/placeholder.jpeg'}
                    fill
                    alt="placeholder"
                    className="object-cover relative"
                  />
                </div>
                <p className="text-[#294696]">{t('1')}</p>
              </div>
              <div className="w-fit aspect-[2/1] relative bg-[#D6E8F2] p-6 rounded-2xl">
                <div className="relative h-[400px] w-full">
                  <Image
                    src={'/placeholder.jpeg'}
                    fill
                    alt="placeholder"
                    className="object-cover relative"
                  />
                </div>
                <p className="text-[#294696]">{t('2')}</p>
              </div>
              <div className="w-fit aspect-[2/1] relative bg-[#D6E8F2] p-6 rounded-2xl">
                <div className="relative h-[400px] w-full">
                  <Image
                    src={'/placeholder.jpeg'}
                    fill
                    alt="placeholder"
                    className="object-cover relative"
                  />
                </div>
                <p className="text-[#294696]">{t('3')}</p>
              </div>
            </Slider>
          </div>
          <div className="">
            <Image src={'/Vector.svg'} fill className="  " alt="Assets" />
          </div>
        </div>
      </section>
    </>
  )
}
