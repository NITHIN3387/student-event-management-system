import Image from "next/image";
import React, { FC } from "react";

import Logo from"@/assets/images/sahyadri-logo.png"

const SideNavbar: FC = (): JSX.Element => {
  return (
    <div className="hidden md:flex justify-between pe-4 h-[5rem]  items-center bg-gray-900">
      <Image src={Logo} alt="logo" width={60} height={60} />
    </div>
  );
};

export default SideNavbar;
