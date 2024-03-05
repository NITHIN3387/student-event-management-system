"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react'

interface propsType {
  navList: {
    label: string;
    link: string;
  }[];
}

const TabsNavbar: FC<propsType> = ({ navList }): JSX.Element => {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState<number>(0)

  useEffect(() => {
    if (navList)
    for (let i = 0; i < navList.length; i++) {    
        if (pathname == navList[i].link) {
          setActiveTab(i)
          break
        }
    }
  }, [pathname, navList])

  return (
    <ul className='bg-[#212529] w-fit p-2 rounded-md flex gap-2'>
      {navList?.map((item, index) => (
          <Link
            href={item.link}
            key={item.link}
            className={`px-3 py-1 rounded-sm ${
              activeTab === index
                ? "bg-[#3db166] text-white" // Active tab background and font color
                : "text-[#979797]" // Inactive tab background and font color
            }`}
            onClick={() => setActiveTab(index)}
          >
            <span>{item.label}</span>
          </Link>
        ))}
    </ul>
  )
}

export default TabsNavbar