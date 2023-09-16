import Image from 'next/image'
import React from 'react'

interface ProductListCardProps {
  imgsrc: string
  title: string
  subtitle: string
  desc: string
}

export const ProductListCard: React.FC<ProductListCardProps> = ({
  imgsrc,
  subtitle,
  title,
  desc,
}) => {
  // TODO: Write element's logic

  return (
    <>
      <div className="w-full bg-[#294696] rounded-[12.8px] px-[20px] py-[25px] flex flex-col gap-[20px]">
        <div className="w-full aspect-[3/2] rounded-[16px] relative">
          <Image
            src={imgsrc}
            alt={title}
            fill
            className="object-cover object-center relative rounded-[16px]"
          />
        </div>
        <div className="flex flex-col gap-2 text-justify">
          <p className="text-[#73A1C3] font-medium text-[24px]">{title}</p>
          <p className="text-[#D6E8F2] font-medium text-xs">{subtitle}</p>
          <p className="text-[#D6E8F2] font-medium text-xs">{desc}</p>
        </div>
      </div>
    </>
  )
}
