'use client'
import Image from 'next/image'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer bg-[#294696] relative border-b-2 border-blue-700 lg:items-center flex flex-col">
        <div className="container px-3">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between gap-4">
              <div className="flex flex-col w-full">
                <div className="text-[#D6E8F2] font-bold text-4xl mb-2 flex gap-2">
                  <div className=''>
                    <Image
                    className='relative'
                    alt='CompanyLogo'
                    width={50}
                    height={50}
                    src={'CompanyLogo.svg'}
                    />
                  </div>
                  PT. Aceng Tunggal Perkasa
                </div>
                <span className=" font-medium">
                  <p
                    className="text-[#D6E8F2]  text-md"
                  >
                    Sustainably sourced, ethically processed, and made for your
                    satisfaction.
                  </p>
                </span>
              </div>
              <div className="flex flex-col w-full lg:w-2/4">
                <span className="text-[#D6E8F2] font-bold text-4xl mb-2">
                  Temui Kami
                </span>
                <span className=" font-medium">
                  <p
                    className="text-[#D6E8F2]  text-md  "
                  > 
                    Kedai Kopi Aceng, Jalan Agrowisata Tepas Papandayan Desa
                    Kramatwangi Kecamatan Cisurupan-Garut
                  </p>
                </span>
              </div>
              <div className='flex lg:justify-center md:justify-center sm:justify-normal w-full lg:w-3/5'>
                <div className="flex flex-col">
                  <span className="text-[#D6E8F2] font-bold text-4xl mb-2">
                    Kontak Kami
                  </span>
                  <span className=" font-medium">
                    <p
                      className="text-[#D6E8F2] text-md"
                    >
                      +6281323583457
                    </p>
                  </span>
                </div>
              </div>
              <div className="flex flex-col  w-full lg:w-2/4">
                <span className="text-[#D6E8F2] font-bold text-4xl mb-2">
                  Ikuti Kami
                </span>
                <span className=" font-medium">
                  <a
                    href="#"
                    className="text-[#D6E8F2]  text-md hover:text-blue-500"
                  >
                    Instagram
                  </a>
                </span>
                <span className=" font-medium">
                  <a
                    href="#"
                    className="text-[#D6E8F2]  text-md hover:text-blue-500"
                  >
                    Facebook
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto lg:px-10 ">
          <div className="mt-4 flex flex-col">
            <div className="py-6">
              <p className="text-sm text-white font-bold mb-2">
                © 2023, PT. Aceng Tunggal Perkasa
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
