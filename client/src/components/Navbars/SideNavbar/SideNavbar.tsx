import React, { FC, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/sahyadri-logo.png";
import Dashboard from "@/components/Navbars/SideNavbar/Dashboard/Dashboard"

interface NavListType {
  label: string;
  icon: JSX.Element;
}

const NavList: NavListType[] = [
  {
    label: "Dashboard",
    icon: <Dashboard />,
  },
  // Add more items as needed
];

const SideNavbar: FC = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setActiveTab(index);
    // Add logic for handling item click if needed
  };

  return (
    <div className="hidden md:flex flex-col justify-between h-screen bg-gray-700 p-4">
      <div>
        <Image src={Logo} alt="logo" width={60} height={60} />
        <nav>
          {NavList.map((item, index) => (
            <div
              key={index}
              className={`py-2 px-4 cursor-pointer ${
                activeTab === index
                  ? "bg-gray-700 text-white" // Active tab background and font color
                  : "bg-gray-900 text-gray-300" // Inactive tab background and font color
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
