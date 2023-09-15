'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import '../../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../../node_modules/slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Arrow, ChevronWhiteBig } from '@/components/icons'
import { Accordion, Text } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { useInView } from 'framer-motion'
import { Reveal, SidenavAnimate } from '@/components'
import { useTranslations } from 'next-intl'

export default function CoffeeDetail() {
  const t = useTranslations('Atsiri')

  const refIntro = useRef(null)
  const isInViewIntro = useInView(refIntro)

  const refHistory = useRef(null)
  const isInViewHistory = useInView(refHistory)

  const refHowTo = useRef(null)
  const isInViewHowTo = useInView(refHowTo)

  const refFaq = useRef(null)
  const isInViewFaq = useInView(refFaq)

  const [nav1, setNav1] = useState<Slider | undefined>()
  const [nav2, setNav2] = useState<Slider | undefined>()
  const sliderRef = useRef<Slider | null>(null)

  const next = () => {
    sliderRef.current?.slickNext()
  }

  const prev = () => {
    sliderRef.current?.slickPrev()
  }

  const next2 = () => {
    nav1?.slickNext()
  }

  const prev2 = () => {
    nav1?.slickPrev()
  }

  const scrollTo = (id: string) => {
    const intro = document.getElementById(id)
    const elementPosition = intro?.getBoundingClientRect().top as number
    const navbarOffset = 100
    const offsetPosition = elementPosition + window.scrollY - navbarOffset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <div className='md:aspect-[3/1] h-screen pl-10 md:h-auto w-full bg-[url("/atsiriHeroBg.png")] bg-cover bg-no-repeat bg-center md:px-20 p-5 flex flex-col justify-center'>
        <p className="lg:text-[96px] text-[48px] lg:leading-[129.6px] leading-[64.8px] font-bold text-[#E9E0D7]">
          {t('title')}
        </p>
      </div>
      <div className="w-full md:px-20 px-5 lg:flex py-10">
        {/* Nav */}
        <div className="lg:hidden w-full sticky top-[50px] flex overflow-x-auto z-20 bg-white py-3 gap-5 scrollbar-hidden">
          <p
            className={`flex-none text-[12px] text-[#667085] font-medium transition-all ${
              isInViewIntro && 'border-b-2 border-[#73A1C3]'
            }`}
            onClick={() => scrollTo('intro')}
          >
            Introduction
          </p>
          <p
            className={`flex-none text-[12px] text-[#667085] font-medium transition-all ${
              isInViewHistory && 'border-b-2 border-[#73A1C3]'
            }`}
            onClick={() => scrollTo('history')}
          >
            History
          </p>
          <p
            className={`flex-none text-[12px] text-[#667085] font-medium transition-all ${
              isInViewHowTo && 'border-b-2 border-[#73A1C3]'
            }`}
            onClick={() => scrollTo('howTo')}
          >
            How do we produce our product
          </p>
          <p
            className={`flex-none text-[12px] text-[#667085] font-medium transition-all ${
              isInViewFaq && 'border-b-2 border-[#73A1C3]'
            }`}
            onClick={() => scrollTo('faq')}
          >
            Frequently Asked Question
          </p>
        </div>
        <div className="lg:w-1/4 hidden lg:block relative">
          <div className="sticky w-full top-[120px] flex flex-col gap-[16px]">
            <SidenavAnimate
              isInView={isInViewIntro}
              scrollTo={() => {
                scrollTo('intro')
              }}
            >
              Introduction
            </SidenavAnimate>
            <SidenavAnimate
              isInView={isInViewHistory}
              scrollTo={() => {
                scrollTo('history')
              }}
            >
              History
            </SidenavAnimate>

            <SidenavAnimate
              isInView={isInViewHowTo}
              scrollTo={() => {
                scrollTo('howTo')
              }}
            >
              How do we produce our product
            </SidenavAnimate>
            <SidenavAnimate
              isInView={isInViewFaq}
              scrollTo={() => {
                scrollTo('faq')
              }}
            >
              Frequently Asked Question
            </SidenavAnimate>

            <p className="text-[#667085] text-[20px] leading-[27px] cursor-pointer">
              Product list
            </p>
          </div>
        </div>
        <div className="lg:w-3/4 w-full flex flex-col gap-10 mg:gap-20">
          {/* Intro */}
          <div className="w-full flex flex-col gap-5" id="intro" ref={refIntro}>
            <Reveal>
              <p className="text-[#294696] font-bold text-[32px] md:text-[48px]">
                Introduction
              </p>
            </Reveal>
            <div className="w-full flex lg:flex-row flex-col gap-5 lg:gap-[48px] text-justify">
              <div className="lg:w-1/2 w-full flex flex-col gap-[10px]">
                <Reveal>
                  <div className="w-full aspect-square relative">
                    <Image
                      src={'/introductionatsiri.jpg'}
                      alt="placeholder"
                      fill
                      className="object-cover relative"
                    />
                  </div>
                </Reveal>
              </div>
              <div className="lg:w-1/2 w-full flex flex-col gap-5">
                <Reveal>
                  <p className="md:text-[16px] text-[12px] leading-[16.2px] md:leading-[21.6px] text-[#475467]">
                    {t('intro.1')}
                  </p>
                </Reveal>
                <Reveal>
                  <p className="md:text-[16px] text-[12px] leading-[16.2px] md:leading-[21.6px] text-[#475467]">
                    {t('intro.2')}
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          {/* History */}
          <div className="w-full" id="history" ref={refHistory}>
            <Reveal>
              <p className="text-center text-[#294696] text-[48px] leading-[64.8px] font-bold mb-5">
                History
              </p>
            </Reveal>
            <div className="aspect-[2/1] w-full relative">
              <button
                className="w-fit h-fit absolute -bottom-7 md:left-1/3 left-5 z-10"
                onClick={prev}
              >
                <Reveal>
                  <Arrow />
                </Reveal>
              </button>
              <button
                className="w-fit h-fit absolute -bottom-7 md:right-1/3 right-5 z-10 rotate-180"
                onClick={next}
              >
                <Reveal>
                  <Arrow />
                </Reveal>
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
                    src={'/history3.jpg'}
                    fill
                    alt="placeholder"
                    className="object-cover relative"
                  />
                </div>
                <div className="w-full aspect-[2/1] relative">
                  <Image
                    src={'/history4.jpg'}
                    fill
                    alt="placeholder"
                    className="object-cover relative"
                  />
                </div>
              </Slider>
            </div>
            <ul className="list-disc flex flex-col mt-10">
              <li>
                <Reveal>
                  <p className="text-justify text-[#475467] text-[16px] leading-[21.6px]">
                    {t('history.1')}
                  </p>
                </Reveal>
              </li>
              <li>
                <Reveal>
                  <p className="text-justify text-[#475467] text-[16px] leading-[21.6px]">
                    {t('history.2')}
                  </p>
                </Reveal>
              </li>
              <li>
                <Reveal>
                  <p className="text-justify text-[#475467] text-[16px] leading-[21.6px]">
                    {t('history.3')}
                  </p>
                </Reveal>
              </li>
            </ul>
          </div>

          {/* How To */}
          <div className="w-full" id="howTo" ref={refHowTo}>
            <Reveal>
              <p className="text-center text-[#294696] text-[32px] md:text-[48px] leading-[43.2px] md:leading-[64.8px] font-bold mb-5">
                How Do We Produce
              </p>
            </Reveal>
            <Reveal>
              <div className="w-full bg-[#294696] rounded-[20px] p-[24px] flex justify-between flex-col xl:flex-row gap-[24px] transition-all">
                <div className="lg:min-w-[333px]">
                  <Slider
                    infinite
                    speed={1000}
                    arrows={false}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay
                    autoplaySpeed={10000}
                    dots={false}
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2 as Slider)}
                    className="w-full"
                  >
                    <div>
                      <p className="text-[#E9E0D7] text-[24px] md:text-[36px] leading-[32.4px] md:leading-[54px] font-bold">
                        Step 1:
                      </p>
                      <p className="text-[#E9E0D7] text-[24px] md:text-[36px] leading-[32.4px] md:leading-[54px] font-bold">
                        {t('step.1.title')}
                      </p>
                      <p className="text-[#E9E0D7] text-[12px] md:text-[16px] leading-[16.2px] md:leading-[32px] font-medium">
                        {t('step.1.desc')}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#E9E0D7] text-[24px] md:text-[36px] leading-[32.4px] md:leading-[54px] font-bold">
                        Step 2:
                      </p>
                      <p className="text-[#E9E0D7] text-[24px] md:text-[36px] leading-[32.4px] md:leading-[54px] font-bold">
                        {t('step.2.title')}
                      </p>
                      <p className="text-[#E9E0D7] text-[12px] md:text-[16px] leading-[16.2px] md:leading-[32px] font-medium">
                        {t('step.2.desc')}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#E9E0D7] text-[24px] md:text-[36px] leading-[32.4px] md:leading-[54px] font-bold">
                        Step 3:
                      </p>
                      <p className="text-[#E9E0D7] text-[24px] md:text-[36px] leading-[32.4px] md:leading-[54px] font-bold">
                        {t('step.3.title')}
                      </p>
                      <p className="text-[#E9E0D7] text-[12px] md:text-[16px] leading-[16.2px] md:leading-[32px] font-medium">
                        {t('step.3.desc')}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#E9E0D7] text-[24px] md:text-[36px] leading-[32.4px] md:leading-[54px] font-bold">
                        Step 4:
                      </p>
                      <p className="text-[#E9E0D7] text-[24px] md:text-[36px] leading-[32.4px] md:leading-[54px] font-bold">
                        {t('step.4.title')}
                      </p>
                      <p className="text-[#E9E0D7] text-[12px] md:text-[16px] leading-[16.2px] md:leading-[32px] font-medium">
                        {t('step.4.desc')}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#E9E0D7] text-[24px] md:text-[36px] leading-[32.4px] md:leading-[54px] font-bold">
                        Step 5:
                      </p>
                      <p className="text-[#E9E0D7] text-[24px] md:text-[36px] leading-[32.4px] md:leading-[54px] font-bold">
                        {t('step.5.title')}
                      </p>
                      <p className="text-[#E9E0D7] text-[12px] md:text-[16px] leading-[16.2px] md:leading-[32px] font-medium">
                        {t('step.5.desc')}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#E9E0D7] text-[24px] md:text-[36px] leading-[32.4px] md:leading-[54px] font-bold">
                        Step 6:
                      </p>
                      <p className="text-[#E9E0D7] text-[24px] md:text-[36px] leading-[32.4px] md:leading-[54px] font-bold">
                        {t('step.6.title')}
                      </p>
                      <p className="text-[#E9E0D7] text-[12px] md:text-[16px] leading-[16.2px] md:leading-[32px] font-medium">
                        {t('step.6.desc')}
                      </p>
                    </div>
                  </Slider>
                  <div className="w-full flex gap-5 justify-end mt-10">
                    <button
                      className="bg-[#E9E0D7] p-[6px] rounded-full text-[#294696]"
                      onClick={prev2}
                    >
                      <Reveal>
                        <ChevronWhiteBig />
                      </Reveal>
                    </button>
                    <button
                      className="bg-[#E9E0D7] p-[6px] rounded-full rotate-180 text-[#294696]"
                      onClick={next2}
                    >
                      <Reveal>
                        <ChevronWhiteBig />
                      </Reveal>
                    </button>
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <div className="w-full md:w-[400px] 2xl:w-[480px]">
                    <Slider
                      infinite
                      speed={1000}
                      arrows={false}
                      slidesToShow={1}
                      slidesToScroll={1}
                      autoplay
                      autoplaySpeed={10000}
                      dots
                      asNavFor={nav2}
                      ref={(slider1) => setNav1(slider1 as Slider)}
                      className="w-full"
                    >
                      <div className="w-full aspect-[8/5] relative">
                        <Image
                          src={'/atsiristep1.jpg'}
                          fill
                          alt="placeholder"
                          className="object-cover relative"
                        />
                      </div>
                      <div className="w-full aspect-[8/5] relative">
                        <Image
                          src={'/atsiristep2.png'}
                          fill
                          alt="placeholder"
                          className="object-cover relative"
                        />
                      </div>
                      <div className="w-full aspect-[8/5] relative">
                        <Image
                          src={'/atsiristep3.jpg'}
                          fill
                          alt="placeholder"
                          className="object-cover relative"
                        />
                      </div>
                      <div className="w-full aspect-[8/5] relative">
                        <Image
                          src={'/atsiristep4.png'}
                          fill
                          alt="placeholder"
                          className="object-cover relative"
                        />
                      </div>
                      <div className="w-full aspect-[8/5] relative">
                        <Image
                          src={'/atsiristep5.jpg'}
                          fill
                          alt="placeholder"
                          className="object-cover relative"
                        />
                      </div>
                      <div className="w-full aspect-[8/5] relative">
                        <Image
                          src={'/atsiristep6.png'}
                          fill
                          alt="placeholder"
                          className="object-cover relative"
                        />
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          {/* FAQ */}
          <div className="w-full" id="faq" ref={refFaq}>
            <Reveal>
              <p className="text-center text-[#294696] text-[32px] md:text-[48px] leading-[43.2px] md:leading-[64.8px] font-bold mb-5">
                Frequently Asked Question
              </p>
            </Reveal>
            <Reveal>
              <Accordion
                defaultValue="customization"
                chevron={<IconPlus size="1rem" />}
                styles={{
                  chevron: {
                    '&[data-rotate]': {
                      transform: 'rotate(45deg)',
                      color: '#294696',
                    },
                  },
                  control: {
                    color: '#344054',
                    '&[data-active]': {
                      color: '#294696',
                    },
                  },
                  content: {
                    color: '#475467',
                    fontSize: 16,
                  },
                }}
              >
                <Accordion.Item value="1">
                  <Accordion.Control>
                    <Text fw={700}> {t('faq.1.q')}</Text>
                  </Accordion.Control>
                  <Accordion.Panel>{t('faq.1.a')}</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="2">
                  <Accordion.Control>
                    <Text fw={700}> {t('faq.2.q')}</Text>
                  </Accordion.Control>
                  <Accordion.Panel>{t('faq.2.a')}</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="3">
                  <Accordion.Control>
                    <Text fw={700}> {t('faq.3.q')}</Text>
                  </Accordion.Control>
                  <Accordion.Panel>{t('faq.3.a')}</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="4">
                  <Accordion.Control>
                    <Text fw={700}> {t('faq.4.q')}</Text>
                  </Accordion.Control>
                  <Accordion.Panel>{t('faq.4.a')}</Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  )
}
