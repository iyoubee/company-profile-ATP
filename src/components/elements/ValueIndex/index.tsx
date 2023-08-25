'use client'
import { useTranslations } from 'next-intl'
import React from 'react'
import { Reveal } from '../Reveal'
import {
  Educating,
  Empowering,
  Exploring,
  Pioneering,
} from '@/components/icons'

export const ValueIndex: React.FC = () => {
  const t = useTranslations('Index.value')

  return (
    <>
      <div className="w-full px-20 mt-[128px] flex gap-20">
        <div className="w-7/12 flex flex-col gap-[60px]">
          <Reveal>
            <div className="flex gap-[60px]">
              <div className="bg-[#294696] border-4 border-[#D6E8F24D] w-[309px] h-[349px] rounded-[24px] p-[48px] flex-initial">
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
              <div className="bg-[#294696] border-4 border-[#D6E8F24D] w-[344px] h-[349px] rounded-[24px] p-[48px]">
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
              <div className="bg-[#294696] border-4 border-[#D6E8F24D] w-[326.5px] h-[317px] rounded-[24px] p-[48px]">
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
        <div className="w-5/12 flex flex-col gap-[24px]">
          <Reveal>
            <p className="text-[#294696] text-[64px] leading-[86px] font-bold">
              {t('title')}
            </p>
          </Reveal>
          <Reveal>
            <p className="text-[#525C60] font-medium text-[18px] leading-[24px] text-justify">
              {t('desc')}
            </p>
          </Reveal>
        </div>
      </div>
    </>
  )
}
