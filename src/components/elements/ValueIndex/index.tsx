'use client'
import '../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { useTranslations } from 'next-intl'
import React, { useRef } from 'react'
import { Reveal } from '../Reveal'
import {
  Educating,
  Empowering,
  Exploring,
  Pioneering,
} from '@/components/icons'
import Image from 'next/image'

export const ValueIndex: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null)

  // const next = () => {
  //   sliderRef.current?.slickNext()
  // }

  // const prev = () => {
  //   sliderRef.current?.slickPrev()
  // }

  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  const t = useTranslations('Index.value')

  return (
    <>
      <div className="w-full p-5 md:px-20 2xl:px-60 mt-[64px] md:mt-[128px] flex xl:flex-row flex-col-reverse gap-10 lg:gap-20">
        <Reveal>
          <div className="w-full flex justify-center lg:hidden">
            <Slider {...settings} ref={sliderRef} className="value w-[300px]">
              <div className="bg-[#294696] border-4 border-[#D6E8F24D] w-[309px] rounded-[24px] p-8 flex-initial">
                <Pioneering />
                <div className="mt-[10px]">
                  <p className="text-[#E9E0D7] font-semibold text-[32px] mb-[6px]">
                    {t('1.title')}
                  </p>
                  <p className="text-[#E9E0D7] font-medium text-[12px] leading-[16.2px] text-justify">
                    {t('1.desc')}
                  </p>
                </div>
              </div>
              <div className="bg-[#294696] border-4 border-[#D6E8F24D] w-[344px] rounded-[24px] p-8">
                <Empowering />
                <div className="mt-[10px]">
                  <p className="text-[#E9E0D7] font-semibold text-[32px] mb-[6px]">
                    {t('2.title')}
                  </p>
                  <p className="text-[#E9E0D7] font-medium text-[12px] leading-[16.2px] text-justify">
                    {t('2.desc')}
                  </p>
                </div>
              </div>
              <div className="bg-[#294696] border-4 border-[#D6E8F24D] w-[326.5px] rounded-[24px] p-8">
                <Exploring />
                <div className="mt-[10px]">
                  <p className="text-[#E9E0D7] font-semibold text-[32px] mb-[6px]">
                    {t('3.title')}
                  </p>
                  <p className="text-[#E9E0D7] font-medium text-[12px] leading-[16.2px] text-justify">
                    {t('3.desc')}
                  </p>
                </div>
              </div>
              <div className="bg-[#294696] border-4 border-[#D6E8F24D] w-[326.5px] rounded-[24px] p-8">
                <Educating />
                <div className="mt-[10px]">
                  <p className="text-[#E9E0D7] font-semibold text-[32px] mb-[6px]">
                    {t('4.title')}
                  </p>
                  <p className="text-[#E9E0D7] font-medium text-[12px] leading-[16.2px] text-justify">
                    {t('4.desc')}
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </Reveal>
        <div className="xl:w-7/12 w-full lg:flex flex-col gap-[60px] lg:items-center xl:items-start hidden">
          <Reveal>
            <div className="flex gap-[60px]">
              <div className="bg-[#294696] border-4 border-[#D6E8F24D] w-[326.5px] h-[349px] rounded-[24px] p-[48px]">
                <Image src={'/pion.svg'} alt="pion" width={72} height={72} />
                <div className="mt-[10px]">
                  <p className="text-[#E9E0D7] font-semibold text-[32px] mb-[6px]">
                    {t('1.title')}
                  </p>
                  <p className="text-[#E9E0D7] font-medium text-[12px] leading-[16.2px] text-justify">
                    {t('1.desc')}
                  </p>
                </div>
              </div>
              <div className="bg-[#294696] border-4 border-[#D6E8F24D] w-[326.5px] h-[349px] rounded-[24px] p-[48px]">
                <Empowering />
                <div className="mt-[10px]">
                  <p className="text-[#E9E0D7] font-semibold text-[32px] mb-[6px]">
                    {t('2.title')}
                  </p>
                  <p className="text-[#E9E0D7] font-medium text-[12px] leading-[16.2px] text-justify">
                    {t('2.desc')}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex gap-[60px]">
              <div className="bg-[#294696] border-4 border-[#D6E8F24D] w-[326.5px] h-[349px] rounded-[24px] p-[48px]">
                <Exploring />
                <div className="mt-[10px]">
                  <p className="text-[#E9E0D7] font-semibold text-[32px] mb-[6px]">
                    {t('3.title')}
                  </p>
                  <p className="text-[#E9E0D7] font-medium text-[12px] leading-[16.2px] text-justify">
                    {t('3.desc')}
                  </p>
                </div>
              </div>
              <div className="bg-[#294696] border-4 border-[#D6E8F24D] w-[326.5px] h-[349px] rounded-[24px] p-[48px]">
                <Educating />
                <div className="mt-[10px]">
                  <p className="text-[#E9E0D7] font-semibold text-[32px] mb-[6px]">
                    {t('4.title')}
                  </p>
                  <p className="text-[#E9E0D7] font-medium text-[12px] leading-[16.2px] text-justify">
                    {t('4.desc')}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="xl:w-5/12 w-full flex flex-col gap-[24px]">
          <Reveal>
            <p className="text-[#294696] text-[32px] md:text-[64px] leading-[43.2px] md:leading-[86px] font-bold text-center md:text-start">
              {t('title')}
            </p>
          </Reveal>
          <Reveal>
            <div className='flex flex-col gap-4'>
              <p className="text-[#525C60] font-medium text-[12px] md:text-[18px] leading-[24px] text-justify">
                {t('desc')}
              </p>
              <p className="text-[#525C60] font-medium text-[12px] md:text-[18px] leading-[24px] text-justify">
                {t('subdesc')}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  )
}
