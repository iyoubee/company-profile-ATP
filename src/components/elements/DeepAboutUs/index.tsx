'use client'
import { useTranslations } from 'next-intl'
import React from 'react'
import { Reveal } from '../Reveal'

export const AboutUs: React.FC = () => {
  const t = useTranslations('About.deep')

  return (
    <>
    <section className=' h-fit bg-[url("/indonesia.svg")] bg-cover relative bg-no-repeat'>
        <div className="w-full md:p-20 p-5 relative flex flex-col justify-center">
            <Reveal>
              <p className="text-[#294696] font-bold md:text-[64px] text-[32px]">
                {t('comp')}
              </p>
            </Reveal>
            <div className="w-full mt-[32px] relative flex-col xl:flex-row">
              
              <ul className=' list-disc flex gap-4 flex-col'>
                <li>
                  <Reveal>
                    <p className="text-black font-bold md:text-xl text-lg">
                      {t('1')}
                    </p>
                  </Reveal>
                </li>
                <li>
                  <Reveal>
                    <p className="text-black font-bold md:text-xl text-lg">
                      {t('2')}
                    </p>
                  </Reveal>
                </li>
                <li>
                  <Reveal>
                    <p className="text-black font-bold md:text-xl text-lg">
                      {t('3')}
                    </p>
                  </Reveal>
                </li>
                <li>
                  <Reveal>
                    <p className="text-black font-bold md:text-xl text-lg">
                      {t('4')}
                    </p>
                  </Reveal>
                </li>
                <li>
                  <Reveal>
                    <p className="text-black font-bold md:text-xl text-lg">
                      {t('5')}
                    </p>
                  </Reveal>
                </li>
              </ul>
            </div>
          </div>
        </section>
    </>
  )
}
