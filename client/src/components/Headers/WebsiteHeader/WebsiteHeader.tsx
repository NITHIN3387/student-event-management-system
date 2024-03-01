"use client"

import React, { FC, useEffect, useState } from "react";
import UserProfileCapsule from "@/components/UserProfileCapsule/UserProfileCapsule";
import { usePathname } from "next/navigation";

interface propsType {
  headerTitleList?: {
    label: string;
    icon: JSX.Element;
    link: string;
  }[];
}

const WebsiteHeader: FC<propsType> = ({ headerTitleList }): JSX.Element => {
  const pathname = usePathname()
  const [headerTitle, setHeaderTitle] = useState<string>("")

  useEffect(() => {
    if (headerTitleList)
      for (let i = 0; i < headerTitleList?.length; i++) {
        if (pathname.startsWith(headerTitleList[i].link)) {
          setHeaderTitle(headerTitleList[i].label)
          break
        }
    }
  }, [pathname, headerTitleList])

  return (
    <header className="flex justify-between items-center px-7 py-3">
      <h1 className="text-3xl font-semibold">
        {headerTitle}
      </h1>
      <UserProfileCapsule />
    </header>
  );
};

export default WebsiteHeader;
