'use client'
import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'

export const SliderAboutUs: React.FC = () => {
  const t = useTranslations('About.timeline')
  return (
    <>
      <div className={`w-full overflow-x-scroll py-4`}>
        <div className="flex gap-8 lg:gap-32 relative m-auto w-max p-[20px] lg:p-[50px]">
          <div
            id="illustration-timeline"
            className="absolute w-[calc(100%-40px)] lg:w-[calc(100%-100px)] h-[10px] lg:h-[25px] bottom-[1px] lg:bottom-[30px] rounded-[12px] bg-white"
          ></div>
          <div className="w-[300px] lg:w-[500px] min-h-[110px] lg:min-h-[200px] relative float-left">
            <div className="w-[20px] h-[20px] lg:w-[48px] lg:h-[48px] absolute  lg:-bottom-5 -bottom-6 left-[150px] lg:left-[250px]  lg:translate-y-[25%] bg-[#E9E0D7] rounded-full shadow-lg"></div>
            <div
              id="frame-event"
              className="absolute w-full h-[110px] lg:h-[150px] p-[15px] shadow-xl text-black  flex flex-col gap-2  bg-[#E9E0D7] rounded-[16px]"
            >
              <span className="flex text-lg lg:text-3xl font-extrabold text-[#294696] w-full gap-2">
                <div className="flex justify-center relative lg:h-[40px] h-[20px] lg:w-[40px] w-[20px]">
                  <Image
                    src={'/TimeLineLogo.svg'}
                    alt="TimeLineLogo"
                    fill
                    className="relative"
                  />
                </div>
                2009
              </span>
              <span className="font-semibold text-[8px] lg:text-[13px] text-[#004739]">
                {t('1')}
              </span>
            </div>
          </div>
          <div className="w-[300px] lg:w-[500px] min-h-[110px] lg:min-h-[200px] relative float-left">
            <div className="w-[20px] h-[20px] lg:w-[48px] lg:h-[48px] absolute  lg:-bottom-5 -bottom-6 left-[150px] lg:left-[250px]  lg:translate-y-[25%] bg-[#E9E0D7] rounded-full shadow-lg"></div>
            <div
              id="frame-event"
              className="absolute w-full h-[110px] lg:h-[150px] p-[15px] shadow-xl text-black  flex flex-col gap-2  bg-[#E9E0D7] rounded-[16px]"
            >
              <span className="flex text-lg lg:text-3xl font-extrabold text-[#294696] w-full gap-2">
                <div className="flex justify-center relative lg:h-[40px] h-[20px] lg:w-[40px] w-[20px]">
                  <Image
                    src={'/TimeLineLogo.svg'}
                    alt="TimeLineLogo"
                    fill
                    className="relative"
                  />
                </div>
                2010
              </span>
              <span className="font-semibold text-[8px] lg:text-[13px] text-[#004739]">
              {t('2')}
              </span>
            </div>
          </div>
          <div className="w-[300px] lg:w-[500px] min-h-[110px] lg:min-h-[200px] relative float-left">
            <div className="w-[20px] h-[20px] lg:w-[48px] lg:h-[48px] absolute  lg:-bottom-5 -bottom-6 left-[150px] lg:left-[250px]  lg:translate-y-[25%] bg-[#E9E0D7] rounded-full shadow-lg"></div>
            <div
              id="frame-event"
              className="absolute w-full h-[110px] lg:h-[150px] p-[15px] shadow-xl text-black  flex flex-col gap-2  bg-[#E9E0D7] rounded-[16px]"
            >
              <span className="flex text-lg lg:text-3xl font-extrabold text-[#294696] w-full gap-2">
                <div className="flex justify-center relative lg:h-[40px] h-[20px] lg:w-[40px] w-[20px]">
                  <Image
                    src={'/TimeLineLogo.svg'}
                    alt="TimeLineLogo"
                    fill
                    className="relative"
                  />
                </div>
                2018
              </span>
              <span className="font-semibold text-[8px] lg:text-[13px] text-[#004739]">
              {t('3')}
              </span>
            </div>
          </div>
          <div className="w-[300px] lg:w-[500px] min-h-[110px] lg:min-h-[200px] relative float-left">
            <div className="w-[20px] h-[20px] lg:w-[48px] lg:h-[48px] absolute  lg:-bottom-5 -bottom-6 left-[150px] lg:left-[250px]  lg:translate-y-[25%] bg-[#E9E0D7] rounded-full shadow-lg"></div>
            <div
              id="frame-event"
              className="absolute w-full h-[110px] lg:h-[150px] p-[15px] shadow-xl text-black  flex flex-col gap-2  bg-[#E9E0D7] rounded-[16px]"
            >
              <span className="flex text-lg lg:text-3xl font-extrabold text-[#294696] w-full gap-2">
                <div className="flex justify-center relative lg:h-[40px] h-[20px] lg:w-[40px] w-[20px]">
                  <Image
                    src={'/TimeLineLogo.svg'}
                    alt="TimeLineLogo"
                    fill
                    className="relative"
                  />
                </div>
                2020
              </span>
              <span className="font-semibold text-[8px] lg:text-[13px] text-[#004739]">
              {t('4')}
              </span>
            </div>
          </div>
          <div className="w-[300px] lg:w-[500px] min-h-[110px] lg:min-h-[200px] relative float-left">
            <div className="w-[20px] h-[20px] lg:w-[48px] lg:h-[48px] absolute  lg:-bottom-5 -bottom-6 left-[150px] lg:left-[250px]  lg:translate-y-[25%] bg-[#E9E0D7] rounded-full shadow-lg"></div>
            <div
              id="frame-event"
              className="absolute w-full h-[110px] lg:h-[150px] p-[15px] shadow-xl text-black  flex flex-col gap-2  bg-[#E9E0D7] rounded-[16px]"
            >
              <span className="flex text-lg lg:text-3xl font-extrabold text-[#294696] w-full gap-2">
                <div className="flex justify-center relative lg:h-[40px] h-[20px] lg:w-[40px] w-[20px]">
                  <Image
                    src={'/TimeLineLogo.svg'}
                    alt="TimeLineLogo"
                    fill
                    className="relative"
                  />
                </div>
                2022
              </span>
              <span className="font-semibold text-[8px] lg:text-[13px] text-[#004739]">
              {t('5')}
              </span>
            </div>
          </div>
          <div className="w-[300px] lg:w-[500px] min-h-[110px] lg:min-h-[200px] relative float-left">
            <div className="w-[20px] h-[20px] lg:w-[48px] lg:h-[48px] absolute  lg:-bottom-5 -bottom-6 left-[150px] lg:left-[250px]  lg:translate-y-[25%] bg-[#E9E0D7] rounded-full shadow-lg"></div>
            <div
              id="frame-event"
              className="absolute w-full h-[110px] lg:h-[150px] p-[15px] shadow-xl text-black  flex flex-col gap-2  bg-[#E9E0D7] rounded-[16px]"
            >
              <span className="flex text-lg lg:text-3xl font-extrabold text-[#294696] w-full gap-2">
                <div className="flex justify-center relative lg:h-[40px] h-[20px] lg:w-[40px] w-[20px]">
                  <Image
                    src={'/TimeLineLogo.svg'}
                    alt="TimeLineLogo"
                    fill
                    className="relative"
                  />
                </div>
                {t('now')}
              </span>
              <span className="font-semibold text-[8px] lg:text-[13px] text-[#004739]">
              {t('6')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
