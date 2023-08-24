'use client'
import { Menu } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { ChevronDown } from '@/components/icons'

export const Navbar: React.FC = () => {
  const [scroll, setScroll] = useState(false)

  const path = usePathname()

  const pathSplited = path.split('/')

  const locale = pathSplited[1] == 'en' ? 'en' : 'id'
  console.log(locale)

  useEffect(() => {
    window.addEventListener('scroll', () =>
      !window.scrollY ? setScroll(false) : setScroll(true)
    )
  }, [])

  return (
    <>
      <div
        className={`bg-[#294696] h-[90px] w-full drop-shadow-sm shadow-lg flex justify-between sticky top-0 transition-all duration-1000 z-50 items-center ${
          scroll
            ? 'md:top-1 md:scale-[0.99] lg:top-2 px-[75px]'
            : 'px-20 top-0 scale-100'
        }`}
      >
        <Link href={'/'}>
          <div className="flex gap-2">
            <div className="relative w-[54px] h-[54px] rounded-full border-2 border-[#D2E9F2]">
              <Image
                src={'/ATPLogo.svg'}
                fill
                className="object-cover relative"
                alt="Logo"
              />
            </div>
            <p className="text-[#D2E9F2] font-bold text-[36px]">ATP</p>
          </div>
        </Link>
        <Menu shadow="md">
          <Menu.Target>
            <button className="flex items-center text-[14px] text-[#344054] font-semibold bg-[#D6E8F2] py-1 px-3 rounded">
              {locale == 'en' ? 'US' : 'ID'} <ChevronDown />
            </button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>
              <Link href={locale == 'en' ? '/id' : '/en'}>
                {locale == 'en' ? 'ID' : 'US'}
              </Link>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </>
  )
}
