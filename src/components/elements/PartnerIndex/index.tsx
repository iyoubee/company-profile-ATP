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
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <>
      <div className="w-full mt-[128px]">
        <Slider {...settings} ref={sliderRef} className="tes">
          <div className="w-[480px] h-[360px]">
            <PartnerCard />
          </div>
          <div className="w-[480px] h-[360px]">
            <PartnerCard />
          </div>
          <div className="w-[480px] h-[360px]">
            <PartnerCard />
          </div>
          <div className="w-[480px] h-[360px]">
            <PartnerCard />
          </div>
          <div className="w-[480px] h-[360px]">
            <PartnerCard />
          </div>
          <div className="w-[480px] h-[360px]">
            <PartnerCard />
          </div>
        </Slider>
        <div className="w-full px-20 py-[32px] bg-[#73A1C3] flex gap-[64px] relative">
          <button
            className="bg-[#294696] p-[6px] rounded-full absolute -top-5 left-20"
            onClick={prev}
          >
            <Reveal>
              <ChevronWhiteBig />
            </Reveal>
          </button>
          <button
            className="bg-[#294696] p-[6px] rounded-full absolute -top-5 right-20 rotate-180"
            onClick={next}
          >
            <Reveal>
              <ChevronWhiteBig />
            </Reveal>
          </button>
          <p className="text-[#294696] text-[64px] font-bold leading-[86.4px] flex-none">
            Partner Kami
          </p>
          <p className="text-[#FFFAEB] font-medium text-[18px] text-justify leading-[24.3px]">
            Kami sangat berterima kasih atas testimoni positif dari pelanggan
            kami. Kami selalu bekerja keras untuk meningkatkan produk dan
            layanan kami, dan menjadi kepuasan bagi kami ketika mendengar bahwa
            pelanggan kami puas. Kami berkomitmen untuk memberikan pelanggan
            kami pengalaman produk terbaik yang kami bisa berikan, dan kami
            berharap Anda akan terus mengunjungi kami dan menikmati produk kami.
          </p>
        </div>
      </div>
    </>
  )
}
