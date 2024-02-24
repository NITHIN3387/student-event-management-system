import React, { FC, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/sahyadri-logo.png";
import Dashboard from "@/assets/icons/Dashboard"
import Create from "@/assets/icons/CreateParticipation"

interface NavListType {
  label: string;
  icon: JSX.Element;
}

const NavList: NavListType[] = [
  {
    label: "Dashboard",
    icon: <Dashboard />,
  },
  {
    label:"Create",
    icon: <Create/>
  }
  
];

const SideNavbar: FC = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setActiveTab(index);
    
  };

  return (
    <div className="hidden lg:flex flex-col h-screen bg-[#212529]">
        <div className="flex justify-center items-center border-b-2 py-3 border-[#979797] gap-3">
          <Image src={Logo} alt="logo" width={50} height={50} />
          <span className="text-white font-bold text-xl">SAHYADRI</span>
        </div>
        <nav className="p-7">
          {NavList.map((item, index) => (
            <div
              key={index}
              className={`py-4 px-8 text-[1.15em] cursor-pointer rounded-md flex justify-start items-center gap-5 ${
                activeTab === index
                  ? "bg-[#3db166] text-white" // Active tab background and font color
                  : "text-[#979797]" // Inactive tab background and font color
              }`}
              onClick={() => handleItemClick(index)}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
    </div>
  );
};

export default SideNavbar;
