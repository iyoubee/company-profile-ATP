import React from 'react'

export const ProductCard: React.FC = () => {
  return (
    <>
      <div className="w-full h-[709px]">
        <div className="w-full h-[455px] rounded-3xl translate-y-8 bg-[url('/kopiBg.jpg')] bg-cover bg-no-repeat"></div>
        <div className="h-[254px] w-full rounded-b-3xl bg-[#83764F] flex flex-col justify-between p-[36px] pt-[64px]">
          <p className="text-[#E9E0D7] font-medium text-[12.5px] md:text-[16px]">
            Lorem ipsum dolor sit amet consectetur. Sed arcu viverra laoreet
            interdum velit. Sit tortor scelerisque in proin est turpis enim.{' '}
          </p>
          <div className="w-full flex justify-end">
            <button className="font-bold md:text-[20px] text-xs text-[#E9E0D7] hover:bg-[#E9E0D7] hover:text-[#294696] border-[#E9E0D7] border-4 px-10 py-2 rounded-full">
              Lihat detail
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
