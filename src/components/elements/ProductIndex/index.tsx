'use client'
import '../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'
import { useTranslations } from 'next-intl'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { ChevronWhite } from '@/components/icons'
import { Reveal } from '../Reveal'

export const ProductIndex: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null)

  const next = () => {
    sliderRef.current?.slickNext()
  }

  const prev = () => {
    sliderRef.current?.slickPrev()
  }

  const t = useTranslations('Index.product')

  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <>
      <div className="w-full px-20 mt-[128px] flex">
        <div className="w-1/2">
          <Reveal>
            <p className="text-[#294696] font-bold text-[64px] mb-[16px]">
              {t('title')}
            </p>
          </Reveal>
          <Reveal>
            <p className="text-[#525C60] font-medium text-[18px] mb-[24px]">
              {t('desc')}
            </p>
          </Reveal>
          <Reveal>
            <button className="font-bold text-[#F4FFEE] text-[20px] bg-[#294696] px-6 py-3 rounded-full">
              {t('button')}
            </button>
          </Reveal>
        </div>
        <div className="w-1/2 px-10 relative">
          <button
            className="bg-[#294696] p-[6px] rounded-full absolute top-[70px] -left-0"
            onClick={prev}
          >
            <Reveal>
              <ChevronWhite />
            </Reveal>
          </button>
          <button
            className="bg-[#294696] p-[6px] rounded-full absolute top-[70px] right-1 rotate-180"
            onClick={next}
          >
            <Reveal>
              <ChevronWhite />
            </Reveal>
          </button>
          <Reveal>
            <div>
              <div className=" w-full">
                <Slider {...settings} ref={sliderRef} className="product">
                  <div className="w-[260px] h-[160px] relative">
                    <Image
                      src={'/placeholder.jpeg'}
                      alt="placeholder"
                      fill
                      className="object-fill relative"
                    />
                  </div>
                  <div className="w-[260px] h-[160px] relative">
                    <Image
                      src={'/placeholder.jpeg'}
                      alt="placeholder"
                      fill
                      className="object-fill relative"
                    />
                  </div>
                  <div className="w-[260px] h-[160px] relative">
                    <Image
                      src={'/placeholder.jpeg'}
                      alt="placeholder"
                      fill
                      className="object-fill relative"
                    />
                  </div>
                  <div className="w-[260px] h-[160px] relative">
                    <Image
                      src={'/placeholder.jpeg'}
                      alt="placeholder"
                      fill
                      className="object-fill relative"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  )
}
