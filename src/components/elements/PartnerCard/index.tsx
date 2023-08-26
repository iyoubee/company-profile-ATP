'use client'
import { Quote, Quote2 } from '@/components/icons'
import Image from 'next/image'
import React from 'react'

export const PartnerCard: React.FC = () => {
  return (
    <>
      <div className="w-full h-full py-[70px] px-[30px] bg-[url('/partnerBackground.svg')] flex justify-center flex-col gap-[24px]">
        <div className="flex items-center gap-4">
          <div className="relative w-[56px] h-[56px] rounded-full">
            <Image
              src={'/placeholder.jpeg'}
              alt="Profile Pic"
              fill
              className="object-fill relative rounded-full"
            />
          </div>
          <div className="flex-none">
            <p className="font-semibold text-[18px] text-[#F9FAFB]">
              Olivia Rhye
            </p>
            <p className="font-normal text-[16px] text-[#D0D5DD]">
              PT. Kopi Jaya Berdikari
            </p>
          </div>
        </div>
        <div className="w-full px-7 relative">
          <Quote className="absolute -top-2 -left-1" />
          <Quote2 className="absolute bottom-0 right-0" />
          <p className="text-[16px] text-white font-medium ">
            Saya sangat senang mengunjungi pabrik kopi dan agrowisata ini. Saya
            mendapatkan banyak informasi tentang proses produksi kopi, mulai
            dari penanaman biji kopi hingga menjadi kopi yang siap minum. Saya
            juga dapat melihat langsung bagaimana kopi ditanam dan dipanen.
          </p>
        </div>
      </div>
    </>
  )
}
