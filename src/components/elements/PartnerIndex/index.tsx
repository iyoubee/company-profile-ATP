'use client'
import React from 'react'
import { PartnerCard } from '../PartnerCard'

export const PartnerIndex: React.FC = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-[480px] h-[360px]">
          <PartnerCard />
        </div>
      </div>
    </>
  )
}
