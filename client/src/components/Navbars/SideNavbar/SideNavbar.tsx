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
    <div className="hidden md:flex flex-col justify-between h-screen bg-gray-700 p-4">
      <div>
        <Image src={Logo} alt="logo" width={70} height={70} />
        <nav>
          {NavList.map((item, index) => (
            <div
              key={index}
              className={`py-2 px-4 cursor-pointer ${
                activeTab === index
                  ? "bg-gray-700 text-white gap-9" // Active tab background and font color
                  : "bg-gray-700 text-gray-300" // Inactive tab background and font color
              }`}
              onClick={() => handleItemClick(index)}
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
     
    </div>
  );
};

export default SideNavbar;
