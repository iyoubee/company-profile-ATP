'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { Reveal } from '../Reveal'

export const HeroIndex: React.FC = () => {
  const t = useTranslations('Index.hero')
  return (
    <>
      <section className=' h-fit bg-[url("/heroIndexAssets.svg")] bg-no-repeat bg-cover relative'>
        <div className="p-20 pb-60 w-full">
          <div className="w-2/3 flex flex-col gap-[24px]">
            <Reveal>
              <p className="text-[#E9E0D7] text-[64px] font-bold leading-[80px]">
                Where <span className="text-[#D6E8F2]">Sustainability</span> and{' '}
                <span className="text-[#D6E8F2]">Quality</span> Meet.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-[#E9E0D7] font-medium text-[24px]">
                {t('desc')}
              </p>
            </Reveal>
            <div className="z-20">
              <Reveal>
                <button className="rounded-full bg-[#294696] text-[20px] font-bold leading-[22px] text-[#D6E8F2] px-[36px] py-[15px] w-fit flex-none z-20">
                  {t('button')}
                </button>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="h-2/3 bg-gradient-to-t from-white absolute bottom-0 w-full z-10"></div>
      </section>
    </>
  )
}
