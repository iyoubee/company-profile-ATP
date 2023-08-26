'use client'
import Image from 'next/image'
import React from 'react'

export const ProductSection: React.FC = () => {
  // TODO: Write element's logic

  return (
    <>
      <div className="relative">
        <div className="w-full lg:absolute xl:top-60 hidden">
          <div className="aspect-map w-full relative">
            <Image
              src={'/indonesia.svg'}
              alt="Assets"
              fill
              className="object-cover relative"
            />
          </div>
        </div>
        <div className="w-full md:p-20 p-5"></div>
      </div>
    </>
  )
}
