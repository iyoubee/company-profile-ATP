'use client'
import React, { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'
import { SidenavAnimateProps } from './interface'

export const SidenavAnimate: React.FC<SidenavAnimateProps> = ({
  children,
  scrollTo,
  isInView,
}) => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { x: 15 })
    } else animate(scope.current, { x: 0 })
  }, [isInView])

  return (
    <>
      <div
        className={`transition-all ${
          isInView && 'border-l-4 border-[#73A1C3]'
        }`}
      >
        <motion.div
          ref={scope}
          className={`text-[#667085] text-[20px] leading-[27px] cursor-pointer`}
          onClick={scrollTo}
          variants={{
            hidden: { x: 0 },
            visible: { x: 15 },
          }}
          initial="hidden"
        >
          {children}
        </motion.div>
      </div>
    </>
  )
}
