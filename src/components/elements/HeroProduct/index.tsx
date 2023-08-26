'use client'
import React from 'react'
import { Reveal } from '../Reveal'

export const HeroProduct: React.FC = () => {
  return (
    <>
      <div className='aspect-square md:aspect-[12/7] lg:aspect-heroProduct w-full bg-[url("/heroProductAssetMobile.svg")] md:bg-[url("/heroProductAsset.svg")] bg-cover bg-no-repeat p-5 lg:px-20 lg:pb-[87px] bg-center'>
        <div className="md:w-1/2 h-full flex flex-col justify-end">
          <Reveal>
            <p className="text-[#D6E8F2] font-bold text-[36px] lg:text-[60px] xl:text-[80px] 2xl:text-[96px] leading-[48.6px] lg:leading-[129.6px]">
              Produk Kami
            </p>
          </Reveal>
          <Reveal>
            <p className="2xl:text-[24px] text-[12px] lg:text-[18px] text-[#E9E0D7] font-medium leading-[16.2px] lg:leading-[24.3px] 2xl:leading-relaxed pb-[10px] md:pb-[24px] lg:pb-[32px] text-justify">
              PT ATP adalah perusahaan yang bergerak di bidang pertanian,
              perkebunan, dan agrowisata. Kami memiliki berbagai produk
              unggulan, termasuk Kopi Aceng, Minyak Atsiri Daun Cengkeh, dan
              Agrowisata Tepas Papandayan.{' '}
            </p>
          </Reveal>
          <Reveal>
            <button className="w-fit md:px-[36px] md:py-[15px] px-4 py-2 rounded-full font-bold text-sm md:text-[20px] leading-[22px] text-[#D6E8F2] bg-[#294696]">
              Telusuri produk kami
            </button>
          </Reveal>
        </div>
      </div>
    </>
  )
}
