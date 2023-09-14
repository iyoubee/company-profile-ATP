'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { ProductCardCoffee } from '../ProductCardCoffee'
import '../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Reveal } from '../Reveal'
import { useTranslations } from 'next-intl'
import { ProductCardAtsiri } from '../ProductCardAtsiri'

export const ProductSection: React.FC = () => {
  const t = useTranslations('Product')

  const [id, setId] = useState(0)

  const sliderRef = useRef<Slider | null>(null)

  const kopi = () => {
    sliderRef.current?.slickGoTo(0)
  }

  const atsiri = () => {
    sliderRef.current?.slickGoTo(1)
  }

  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 6000,
  }

  return (
    <>
      <div className="w-full md:p-20 p-5 flex flex-col lg:flex-row relative">
        <Image
          src={'/indonesia.svg'}
          alt="Assets"
          fill
          className="object-cover relative aspect-map w-full hidden lg:block"
        />
        <div className="lg:w-1/2 w-full z-10">
          <Reveal>
            <p className="w-full text-justify text-[#3E6634] font-semibold lg:text-[24px] md:text-base leading-[24px] md:leading-[36px]">
              {t('desc2')}
            </p>
          </Reveal>
        </div>
        <div className="lg:w-1/2 w-full flex lg:justify-end justify-center z-10 2xl:justify-center mt-5 lg:mt-0">
          <div className="md:w-[420px] w-full">
            <Reveal>
              <div className="h-[60px] w-full flex justify-between md:px-20 px-10">
                <button
                  className={`text-[#475467] text-[25px] md:text-[32px] transition-all hover:font-bold border-[#83764F] z-10 ${
                    id == 0 && 'border-b-2 font-bold'
                  }`}
                  onClick={kopi}
                >
                  {t('safaanjg')}
                </button>
                <button
                  className={`text-[#475467] text-[25px] md:text-[32px] hover:font-bold border-[#83764F] transition-all z-10 ${
                    id == 1 && 'border-b-2 font-bold'
                  }`}
                  onClick={atsiri}
                >
                  Atsiri
                </button>
              </div>
            </Reveal>
            <Reveal>
              <div className="z-10">
                <Slider
                  {...settings}
                  ref={sliderRef}
                  afterChange={(newIndex) => {
                    setId(newIndex)
                  }}
                  autoplay
                >
                  <ProductCardCoffee />
                  <ProductCardAtsiri />
                </Slider>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  )
}
