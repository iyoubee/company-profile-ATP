import React from 'react'

export const HeroProductDetail: React.FC = () => {
  // TODO: Write element's logic

  return (
    <>
      <div className='md:aspect-[3/1] h-screen pl-10 md:h-auto w-full bg-[url("/kopiHeroBg.svg")] bg-cover bg-no-repeat bg-center md:px-20 p-5 flex flex-col justify-center'>
        <p className="lg:text-[96px] text-[48px] lg:leading-[129.6px] leading-[64.8px] font-bold text-[#E9E0D7]">
          Kopi
        </p>
        <div className="lg:text-[#294696] text-[#B54708] font-medium bg-[#E9E0D7] text-[12px] lg:text-[24px] p-[8px] lg:p-[16px] rounded-lg w-fit leading-[16px]">
          Coffea canephora
        </div>
      </div>
    </>
  )
}
