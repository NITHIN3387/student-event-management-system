// WebsiteHeader.tsx
import React, { FC, ReactNode } from "react";
import UserProfileCapsule from "@/components/UserProfileCapsule/UserProfileCapsule";

interface WebsiteHeaderProps {
  pageTitle: ReactNode;
}

const WebsiteHeader: FC<WebsiteHeaderProps> = ({ pageTitle }): JSX.Element => {
  
  return (
    <header className="bg-[#ffffff] text-black py-5 border-[#757575] gap-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-1xl font-bold">{pageTitle}</h1>
        <UserProfileCapsule />
      </div>
    </header>
  );
};

export default WebsiteHeader;
