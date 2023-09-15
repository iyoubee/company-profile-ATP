'use client'
import React from 'react'
import { IconPhoneCall, IconMail, IconLocation } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import { Toaster, toast } from 'react-hot-toast'
export const LocationIndex: React.FC = () => {
  const t = useTranslations('Contact')

  return (
    <>
      <section className="flex justify-center">
      <Toaster/>
        <div className="flex bg-[#294696] rounded-2xl flex-col-reverse lg:flex-row pt-4 lg:pt-0">
          <div className="md:w-[500px] w-[300px] bg-[#63A3C7] rounded-2xl md:p-12 p-3 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold text-white">
                {t('locationTitle')}
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22210.152602067505!2d106.90410602116935!3d-6.180441584026235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4df68eac583%3A0xa72cd766bccd0fa9!2sMaria%20Convention%20Hall!5e0!3m2!1sid!2sid!4v1693672135928!5m2!1sid!2sid"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
            <div className="md:flex justify-between hidden">
              <div className="h-40 w-40 -translate-x-20 opacity-40 rounded-full bg-white relative"></div>
              <div className="h-40 w-40 translate-y-20 translate-x-20 z-1 opacity-40 rounded-full bg-white relative"></div>
            </div>
          </div>

          <div className="md:w-[500px] w-[300px] md:p-12 p-3 flex flex-col gap-8 justify-center">
            <div className="flex flex-col gap-6 justify-start">
              <p className="flex gap-4 items-center text-white">
                <IconPhoneCall color="white" /> +62 812 9828 2870
              </p>
              <p className="flex gap-4 items-center text-white">
                <IconMail color="white" /> ptaceng@gmail.com
              </p>
              <div className="flex gap-4 items-center text-white">
                <IconLocation color="white" />{' '}
                <div>
                  132 Dartmouth Street Boston,
                  <p>Massachusetts 02156 United States</p>
                </div>
              </div>
            </div>
            <div className="w-full text-white">
              <p className="font-bold text-xl">Our Email</p>
              <div className=" border-b-2 md:p-4 px-2 py-1 gap-4 w-full flex items-center">
                <span className="text-xs md:text-sm lg:text-lg">
                  ptaceng@gmail.com
                </span>
                <div className="w-full hover:cursor-pointer flex justify-end">
                  <div
                    className=" w-fit bg-[#63A3C7] md:p-2 p-1 rounded-lg flex items-center justify-center "
                    onClick={() => {
                      toast.success('Email copied!')
                      navigator.clipboard.writeText('ptaceng@gmail.com')
                    }}
                  >
                    <p className="text-xs md:text-sm lg:text-lg text-center">
                      Copy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
