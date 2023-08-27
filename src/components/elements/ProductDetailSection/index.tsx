'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import '../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../node_modules/slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Arrow, Plant } from '@/components/icons'

export const ProductDetailSection: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null)

  const next = () => {
    sliderRef.current?.slickNext()
  }

  const prev = () => {
    sliderRef.current?.slickPrev()
  }

  return (
    <>
      <div className="w-full md:px-20 px-5 lg:flex py-10">
        <div className="lg:w-1/4 w-full"></div>
        <div className="lg:w-3/4 w-full flex flex-col gap-20">
          {/* Intro */}
          <div className="w-full flex lg:flex-row flex-col gap-5 lg:gap-[48px] text-justify">
            <div className="lg:w-1/2 w-full flex flex-col gap-[10px]">
              <p className="text-[#294696] font-bold text-[32px] md:text-[48px]">
                Introduction
              </p>
              <div className="w-full aspect-square relative">
                <Image
                  src={'/placeholder.jpeg'}
                  alt="placeholder"
                  fill
                  className="object-cover relative"
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <p className="md:text-[16px] text-[12px] leading-[16.2px] md:leading-[21.6px] text-[#475467]">
                Lorem ipsum dolor sit amet consectetur. Sed pulvinar volutpat
                volutpat venenatis a. Suscipit ornare sed quisque enim purus
                adipiscing vitae fames. Lacus ac hac lectus eu. Id est senectus
                condimentum donec scelerisque eleifend dolor iaculis nulla.
                Ipsum ut feugiat tristique bibendum blandit a massa molestie
                augue. Et fringilla natoque phasellus mattis id erat lectus
                ipsum quam. Arcu nibh massa velit sit cursus nibh senectus in
                suscipit. Lobortis auctor risus quis in leo malesuada massa eu
                at. Aliquet eget id fusce mauris facilisis maecenas. Sit iaculis
                sem ipsum amet neque a euismod hendrerit quis. Mollis dui
                bibendum nec vitae scelerisque felis ultricies. A arcu pretium
                sagittis volutpat quis non maecenas elementum. Sit consectetur
                mattis et nunc tempor mi.
              </p>
            </div>
          </div>
          {/* History */}
          <div className="w-full mt-[40px]">
            <p className="text-center text-[#294696] text-[48px] leading-[64.8px] font-bold mb-5">
              History
            </p>
            <div className="aspect-[2/1] w-full relative">
              <button
                className="w-fit h-fit absolute -bottom-7 md:left-1/3 left-5 z-10"
                onClick={prev}
              >
                <Arrow />
              </button>
              <button
                className="w-fit h-fit absolute -bottom-7 md:right-1/3 right-5 z-10 rotate-180"
                onClick={next}
              >
                <Arrow />
              </button>
              <Slider
                infinite
                speed={1000}
                arrows={false}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay
                autoplaySpeed={10000}
                dots
                ref={sliderRef}
                className="w-full"
              >
                <div className="w-full aspect-[2/1] relative">
                  <Image
                    src={'/placeholder.jpeg'}
                    fill
                    alt="placeholder"
                    className="object-cover relative"
                  />
                </div>
                <div className="w-full aspect-[2/1] relative">
                  <Image
                    src={'/placeholder.jpeg'}
                    fill
                    alt="placeholder"
                    className="object-cover relative"
                  />
                </div>
                <div className="w-full aspect-[2/1] relative">
                  <Image
                    src={'/placeholder.jpeg'}
                    fill
                    alt="placeholder"
                    className="object-cover relative"
                  />
                </div>
                <div className="w-full aspect-[2/1] relative">
                  <Image
                    src={'/placeholder.jpeg'}
                    fill
                    alt="placeholder"
                    className="object-cover relative"
                  />
                </div>
                <div className="w-full aspect-[2/1] relative">
                  <Image
                    src={'/placeholder.jpeg'}
                    fill
                    alt="placeholder"
                    className="object-cover relative"
                  />
                </div>
              </Slider>
            </div>
            <p className="mt-10 text-center text-[#475467] text-[16px] leading-[21.6px]">
              Lorem ipsum dolor sit amet consectetur. Sed pulvinar volutpat
              volutpat venenatis a. Suscipit ornare sed quisque enim purus
              adipiscing vitae fames. Lacus ac hac lectus eu.
            </p>
          </div>
          {/* Production */}
          <div className="w-full mt-[40px]">
            <p className="text-center text-[#294696] text-[48px] leading-[64.8px] font-bold mb-5">
              Production
            </p>
            <div className="w-full flex flex-col md:flex-row gap-[16px] h-[418.53px] md:h-[270px]">
              <div className="md:w-1/4 w-full h-1/4 md:h-full relative rounded-lg">
                <Image
                  src={'/placeholder.jpeg'}
                  alt="placeholder"
                  fill
                  className="object-cover rounded-lg relative"
                />
              </div>
              <div className="md:w-1/2 w-full h-1/2 md:h-full flex gap-[16px]">
                <div className="w-1/2 h-full flex flex-col gap-[16px]">
                  <div className="w-full h-3/5 bg-[#294696] rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute left-0 bottom-0 z-0">
                      <Plant />
                    </div>
                    <p className="text-[#E9E0D7] text-[47.49px] lg:text-[64px] font-bold leading-[64.12px] md:leading-[86.4px] z-10">
                      88%
                    </p>
                    <p className="text-[#E9E0D7] text-[17.81px] lg:text-[24px] font-medium  md:leading-[32.4px] z-10">
                      Sulawesi
                    </p>
                  </div>
                  <div className="w-full h-2/5 relative rounded-lg">
                    <Image
                      src={'/placeholder.jpeg'}
                      alt="placeholder"
                      fill
                      className="object-cover rounded-lg relative"
                    />
                  </div>
                </div>
                <div className="w-1/2 h-full flex flex-col gap-[16px]">
                  <div className="w-full h-1/2 bg-[#294696] rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute left-0 bottom-0 z-0">
                      <Plant />
                    </div>
                    <p className="text-[#E9E0D7] text-[35.62px] lg:text-[48px] font-bold leading-[48.09px] md:leading-[64.8px] z-10">
                      10%
                    </p>
                    <p className="text-[#E9E0D7] text-[17.81px] lg:text-[24px] font-medium  md:leading-[32.4px] z-10">
                      Sumatra
                    </p>
                  </div>
                  <div className="w-full h-1/2 bg-[#294696] rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute left-0 bottom-0 z-0">
                      <Plant />
                    </div>
                    <p className="text-[#E9E0D7] text-[35.62px] lg:text-[48px] font-bold leading-[48.09px] md:leading-[64.8px] z-10">
                      2%
                    </p>
                    <p className="text-[#E9E0D7] text-[17.81px] lg:text-[24px] font-medium  md:leading-[32.4px] z-10">
                      Java
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/4 w-full md:h-full h-1/4 relative rounded-lg">
                <Image
                  src={'/placeholder.jpeg'}
                  alt="placeholder"
                  fill
                  className="object-cover relative rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
