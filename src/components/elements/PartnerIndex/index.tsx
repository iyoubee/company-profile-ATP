'use client'
import '../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'
import React, { useRef } from 'react'
import { PartnerCard } from '../PartnerCard'
import Slider from 'react-slick'
import { ChevronWhiteBig } from '@/components/icons'
import { Reveal } from '../Reveal'

export const PartnerIndex: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null)

  const next = () => {
    sliderRef.current?.slickNext()
  }

  const prev = () => {
    sliderRef.current?.slickPrev()
  }

  const settings = {
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  }

  const settings2 = {
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <>
      <div className="w-full mt-[128px]">
        <div className="hidden lg:block">
          <Reveal>
            <Slider {...settings} ref={sliderRef}>
              <div className="w-[480px]  lg:h-[500px] xl:h-[360px]">
                <PartnerCard />
              </div>
              <div className="w-[480px]  lg:h-[500px] xl:h-[360px]">
                <PartnerCard />
              </div>
              <div className="w-[480px]  lg:h-[500px] xl:h-[360px]">
                <PartnerCard />
              </div>
              <div className="w-[480px]  lg:h-[500px] xl:h-[360px]">
                <PartnerCard />
              </div>
              <div className="w-[480px]  lg:h-[500px] xl:h-[360px]">
                <PartnerCard />
              </div>
              <div className="w-[480px] lg:h-[500px] xl:h-[360px]">
                <PartnerCard />
              </div>
            </Slider>
          </Reveal>
        </div>
        <div className="lg:hidden">
          <Reveal>
            <Slider {...settings2} ref={sliderRef}>
              <div className="w-[480px]  lg:h-[500px] xl:h-[360px]">
                <PartnerCard />
              </div>
              <div className="w-[480px]  lg:h-[500px] xl:h-[360px]">
                <PartnerCard />
              </div>
              <div className="w-[480px]  lg:h-[500px] xl:h-[360px]">
                <PartnerCard />
              </div>
              <div className="w-[480px]  lg:h-[500px] xl:h-[360px]">
                <PartnerCard />
              </div>
              <div className="w-[480px]  lg:h-[500px] xl:h-[360px]">
                <PartnerCard />
              </div>
              <div className="w-[480px] lg:h-[500px] xl:h-[360px]">
                <PartnerCard />
              </div>
            </Slider>
          </Reveal>
        </div>
        <div className="w-full px-5 md:px-20 py-[32px] bg-[#73A1C3] relative">
          <button
            className="bg-[#294696] p-[6px] rounded-full absolute -top-5 left-20 text-white"
            onClick={prev}
          >
            <Reveal>
              <ChevronWhiteBig />
            </Reveal>
          </button>
          <button
            className="bg-[#294696] p-[6px] rounded-full absolute -top-5 right-20 rotate-180 text-white"
            onClick={next}
          >
            <Reveal>
              <ChevronWhiteBig />
            </Reveal>
          </button>
          <Reveal>
            <div className="flex gap-3 lg:gap-[64px] flex-col lg:flex-row">
              <p className="text-[#294696] text-[32px] md:text-[64px] font-bold leading-[43.2px] md:leading-[86.4px] flex-none">
                Partner Kami
              </p>
              <p className="text-[#FFFAEB] font-medium md:text-[18px] text-justify leading-[24.3px]">
                Kami sangat berterima kasih atas testimoni positif dari
                pelanggan kami. Kami selalu bekerja keras untuk meningkatkan
                produk dan layanan kami, dan menjadi kepuasan bagi kami ketika
                mendengar bahwa pelanggan kami puas. Kami berkomitmen untuk
                memberikan pelanggan kami pengalaman produk terbaik yang kami
                bisa berikan, dan kami berharap Anda akan terus mengunjungi kami
                dan menikmati produk kami.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  )
}
