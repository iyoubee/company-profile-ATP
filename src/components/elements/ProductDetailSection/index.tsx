'use client'
import Image from 'next/image'
import React from 'react'

export const ProductDetailSection: React.FC = () => {
  return (
    <>
      <div className="w-full md:px-20 px-5 lg:flex py-10">
        <div className="lg:w-1/4 w-full"></div>
        <div className="lg:w-3/4 w-full">
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
        </div>
      </div>
    </>
  )
}
