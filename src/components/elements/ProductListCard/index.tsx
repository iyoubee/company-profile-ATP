import Image from 'next/image'
import React from 'react'

interface ProductListCardProps {
  imgsrc: string
}

export const ProductListCard: React.FC<ProductListCardProps> = ({ imgsrc }) => {
  // TODO: Write element's logic

  return (
    <>
      <div className="w-full bg-[#294696] rounded-[12.8px] px-[20px] py-[25px] flex flex-col gap-[20px]">
        <div className="w-full aspect-square rounded-[16px]">
          <Image
            src={imgsrc}
            alt="product"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </>
  )
}
