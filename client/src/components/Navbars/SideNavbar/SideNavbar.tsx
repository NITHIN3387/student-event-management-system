"use client"

import React, { FC, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/sahyadri-logo.png";
import Link from "next/link";
import WebsiteHeader from "@/components/Headers/WebsiteHeader/WebsiteHeader";

interface propsType {
  navList?: {
    label: string;
    icon: JSX.Element;
    link: string;
  }[];
}

const SideNavbar: FC<propsType> = ({ navList }): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="hidden lg:flex flex-col h-screen bg-[#212529]">
      <div className="flex justify-center items-center border-b-2 py-3 border-[#979797] gap-3">
        <Image src={Logo} alt="logo" width={50} height={50} />
        <span className="text-white font-bold text-xl">SAHYADRI</span>
      </div>
      <nav className="p-7">
        {navList?.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={`p-4 text-[1.15em] rounded-md flex justify-start items-center gap-3 ${
              activeTab === index
                ? "bg-[#3db166] text-white" // Active tab background and font color
                : "text-[#979797]" // Inactive tab background and font color
            }`}
            onClick={() => setActiveTab(index)}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideNavbar;
