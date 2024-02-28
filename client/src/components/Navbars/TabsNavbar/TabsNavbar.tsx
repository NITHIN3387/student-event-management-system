"use client"

import Link from 'next/link'
import React, { FC, useState } from 'react'

interface propsType {
  navList?: {
    label: string;
    link: string;
  }[];
}

const TabsNavbar: FC<propsType> = ({ navList }): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <ul className='bg-[#212529] w-fit p-2 rounded-md flex gap-2'>
      {navList?.map((item, index) => (
          <Link
            href={item.link}
            key={index}
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