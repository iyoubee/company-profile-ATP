'use client'
import Image from 'next/image'
import React from 'react'
import { Reveal } from '../Reveal'
import { useTranslations } from 'next-intl'

export const AboutUsProduct: React.FC = () => {
    const t = useTranslations('About.product')


  return (
    <>
      <section className='h-fit bg-[#294696] bg-cover relative p-12'>
        <div className="w-full flex" id="history">
            <div className='w-1/3'>
                <Reveal>
                    <p className=" text-[#D6E8F2] text-[48px] leading-[64.8px] font-bold mb-5">
                        {t('title')}
                    </p>
                </Reveal>
                <Reveal>
                    <p className=" text-[#E9E0D7] text-lg font-medium mb-5">
                        {t('desc')}
                    </p>
                </Reveal>
                
            </div>
            
            <div className='flex justify-center w-2/3'>
            
            </div>
            <div className=''>
            <Image
              src={'/Vector.svg'}
              fill
              className=""
              alt="Assets"
            />
            </div>
            
          </div>
          
          
      </section>
      
    </>
  )
}
