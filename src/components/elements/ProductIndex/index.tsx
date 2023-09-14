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

  const settings2 = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <>
      <div className="w-full md:px-20 p-5 lg:mt-[128px] mt-[64px] flex flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full">
          <Reveal>
            <p className="text-[#294696] font-bold text-[32px] md:text-[64px] mb-[16px]">
              {t('title')}
            </p>
          </Reveal>
          <Reveal>
            <p className="text-[#525C60] font-medium text-[12px] md:text-[18px] mb-[24px]">
              {t('desc')}
            </p>
          </Reveal>
          <div className="hidden lg:block">
            <Reveal>
              <button className="font-bold text-[#F4FFEE] hover:bg-white hover:text-[#294696] hover:border-2 hover:border-[#294696] text-[20px] bg-[#294696] px-6 py-3 rounded-full">
                {t('button')}
              </button>
            </Reveal>
          </div>
        </div>
        <div className="lg:w-1/2 w-full px-10 relative">
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
              <div className="hidden md:block w-full">
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
              <div className="md:hidden w-full">
                <Slider {...settings2} ref={sliderRef} className="product">
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
        <div className="w-full lg:hidden">
          <Reveal>
            <div className="w-full mt-5">
              <button className="font-bold text-[#F4FFEE] text-[20px] bg-[#294696] px-6 py-3 rounded-full w-full">
                {t('button')}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  )
}
