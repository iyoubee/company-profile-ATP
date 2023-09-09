'use client'
import Image from 'next/image'
import React from 'react'

export const SliderAboutUs: React.FC = () => {
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
                    className='relative'
                  />
                </div>
                2009
              </span>
              <span className="font-semibold text-[8px] lg:text-[13px] text-[#004739]">
              Dirintis dari usaha perorangan di bidang tanaman kopi oleh beberapa orang yang sekarang menjabat sebagai komisaris dan pengurus dengan menggandeng beberapa mitra.
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
                    className='relative'
                  />
                </div>
                2010
              </span>
              <span className="font-semibold text-[8px] lg:text-[13px] text-[#004739]">
              Terciptanya Brand Produk Kopi Aceng, sebagai produk kolaborasi petani kopi, BUMDES dan swasta. </span>
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
                    className='relative'
                  />
                </div>
                2018
              </span>
              <span className="font-semibold text-[8px] lg:text-[13px] text-[#004739]">
              Menginisiasi kolaborasi dengan mitra petani kopi lainnya di desa Karamatwangi dengan brand kopi yang diberi nama “Kopi Aceng”, dilanjutkan dengan membangun kedai kopi sekaligus kantor di kaki Gunung Papandayan Kabupaten Garut.</span>
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
                    className='relative'
                  />
                </div>
                2020
              </span>
              <span className="font-semibold text-[8px] lg:text-[13px] text-[#004739]">
              Secara resmi mendirikan PT untuk menjadi payung hukum dalam operasi bisnis. Kemudian, memperluas area kerjasama budidaya kopi sampai wilayah Kincir-Sedep (Pangalengan), perbatasan antara kabupaten Garut dan Kabupaten Bandung. Selain itu, mulai mengelola dan mengembangkan Agrowisata Tepas Papandayan (ATP).</span>
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
                    className='relative'
                  />
                </div>
                2022 - 1
              </span>
              <span className="font-semibold text-[8px] lg:text-[13px] text-[#004739]">
              ATP tersebut mulai dikenalkan sebagai wisata alam alternatif di kaki gunung Papandayan Kabupaten Garut, dan terus dikembangkan sampai saat ini.
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
                    className='relative'
                  />
                </div>
                2022 - 2
              </span>
              <span className="font-semibold text-[8px] lg:text-[13px] text-[#004739]">
              ATP aktif membangun jejaring bisnis dan kerjasama berbagai pihak dalam rangka mengupgrade kapasitas perusahaan, termasuk dengan institusi pendidikan, termasuk dalam hal ini dengan Program Studi Agribisnis Fakultas Pertanian UNPAD.
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
                    className='relative'
                  />
                </div>
                Saat ini
              </span>
              <span className="font-semibold text-[8px] lg:text-[13px] text-[#004739]">
              ATP sedang mengembangkan usahanya di bidang penyulingan minyak atsiri dari daun cengkeh (Clove leaf Oil ) di sentra tanaman cengkeh di Garut Selatan, Desa Linggamanik, kecamatan Cikelet Kabupaten Garut.</span>
            </div>
          </div>
          
          
        </div>
      </div>
    </>
  )
}
