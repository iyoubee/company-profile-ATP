'use client'
import React from 'react'
import { IconPhoneCall, IconMail, IconLocation } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
export const LocationIndex: React.FC = () => {
  const t = useTranslations('Contact')

  return (
    <>
      <section className="flex justify-center">
        <div className="flex bg-[#294696] rounded-2xl">
          <div className="w-[500px] bg-[#63A3C7] rounded-2xl p-12 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold text-white">
                {t('locationTitle')}
              </p>
              <p className="text-lg font-thin text-white">
                {t('locationDesc')}
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22210.152602067505!2d106.90410602116935!3d-6.180441584026235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4df68eac583%3A0xa72cd766bccd0fa9!2sMaria%20Convention%20Hall!5e0!3m2!1sid!2sid!4v1693672135928!5m2!1sid!2sid"
              width="400"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

          <div className="w-[500px] p-12 flex flex-col gap-8 justify-center">
            <div className="flex flex-col gap-6 justify-start">
              <p className="flex gap-4 items-center text-white">
                <IconPhoneCall color="white" /> +62 812 9828 2870
              </p>
              <p className="flex gap-4 items-center text-white">
                <IconMail color="white" /> yudiputrasabri789@gmail.com
              </p>
              <p className="flex gap-4 items-center text-white">
                <IconLocation color="white" />{' '}
                <div>
                  Jalan Cipinang Muara 2 No.3A,<p>Jakarta Timur</p>
                </div>
              </p>
            </div>
            <div className='w-full text-white'>
              <p className='font-bold text-xl'>Our Email</p>
              <p className=' border-b-2 p-4 items-center flex gap-4 w-full'>
                yudiputrasabri789@gmail.com
                <div className='w-full flex justify-end hover:cursor-pointer' onClick={() => {
                  navigator.clipboard.writeText('yudiputrasabri789@gmail.com')
                }}>
                  <div className=' w-fit bg-[#63A3C7] p-2 rounded-lg'>
                    <p>Copy Email</p>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
