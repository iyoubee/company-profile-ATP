'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { Reveal } from '../Reveal'
import Image from 'next/image'

export const SliderAboutUs: React.FC = () => {
  return (
    <>
      <div className={`w-full overflow-x-scroll`}>
        <div className="flex gap-8 lg:gap-32 relative m-auto w-max p-[20px] lg:p-[50px]">
          <div
            id="illustration-timeline"
            className="absolute w-[calc(100%-40px)] lg:w-[calc(100%-100px)] h-[10px] lg:h-[25px] bottom-[25px] lg:bottom-[50px] rounded-[12px] bg-white"
          ></div>
          <div className="w-[120px] lg:w-[230px] min-h-[110px] lg:min-h-[200px] relative float-left">
            <div className="w-[20px] h-[20px] lg:w-[48px] lg:h-[48px] absolute bottom-0 left-[60px] lg:left-[115px] translate-x-[-50%] lg:translate-y-[25%] bg-[#E9E0D7] rounded-full shadow-lg"></div>
                <div
                    id="frame-event"
                    className="absolute w-full h-[80px] lg:h-[120px] p-[15px] shadow-xl text-black  flex flex-col gap-2 justify-center items-center bg-[#E9E0D7] rounded-[16px]"
                >
                    <span className="text-[10px] lg:text-xl font-extrabold text-center">
                        titel
                    </span>
                    <span className="font-semibold text-[8px] lg:text-lg text-black">
                        date
                    </span>
                </div>
          </div>
          <div className="w-[120px] lg:w-[230px] min-h-[110px] lg:min-h-[200px] relative float-left">
            <div className="w-[20px] h-[20px] lg:w-[48px] lg:h-[48px] absolute bottom-0 left-[60px] lg:left-[115px] translate-x-[-50%] lg:translate-y-[25%] bg-[#E9E0D7] rounded-full shadow-lg"></div>
                <div
                    id="frame-event"
                    className="absolute w-full h-[80px] lg:h-[120px] p-[15px] shadow-xl text-black  flex flex-col gap-2 justify-center items-center bg-[#E9E0D7] rounded-[16px]"
                >
                    <span className="text-[10px] lg:text-xl font-extrabold text-center">
                        titel
                    </span>
                    <span className="font-semibold text-[8px] lg:text-lg text-black">
                        date
                    </span>
                </div>
          </div>
          <div className="w-[120px] lg:w-[230px] min-h-[110px] lg:min-h-[200px] relative float-left">
            <div className="w-[20px] h-[20px] lg:w-[48px] lg:h-[48px] absolute bottom-0 left-[60px] lg:left-[115px] translate-x-[-50%] lg:translate-y-[25%] bg-[#E9E0D7] rounded-full shadow-lg"></div>
                <div
                    id="frame-event"
                    className="absolute w-full h-[80px] lg:h-[120px] p-[15px] shadow-xl text-black  flex flex-col gap-2 justify-center items-center bg-[#E9E0D7] rounded-[16px]"
                >
                    <span className="text-[10px] lg:text-xl font-extrabold text-center">
                        titel
                    </span>
                    <span className="font-semibold text-[8px] lg:text-lg text-black">
                        date
                    </span>
                </div>
          </div>
          <div className="w-[120px] lg:w-[230px] min-h-[110px] lg:min-h-[200px] relative float-left">
            <div className="w-[20px] h-[20px] lg:w-[48px] lg:h-[48px] absolute bottom-0 left-[60px] lg:left-[115px] translate-x-[-50%] lg:translate-y-[25%] bg-[#E9E0D7] rounded-full shadow-lg"></div>
                <div
                    id="frame-event"
                    className="absolute w-full h-[80px] lg:h-[120px] p-[15px] shadow-xl text-black  flex flex-col gap-2 justify-center items-center bg-[#E9E0D7] rounded-[16px]"
                >
                    <span className="text-[10px] lg:text-xl font-extrabold text-center">
                        titel
                    </span>
                    <span className="font-semibold text-[8px] lg:text-lg text-black">
                        date
                    </span>
                </div>
          </div>
        </div>
      </div>
    </>
  )
}
