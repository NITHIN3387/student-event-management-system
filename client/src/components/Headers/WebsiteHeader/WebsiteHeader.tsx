// WebsiteHeader.tsx
import React, { FC, ReactNode } from "react";
import UserProfileCapsule from "@/components/UserProfileCapsule/UserProfileCapsule";

interface WebsiteHeaderProps {
  pageTitle: ReactNode;
}

const WebsiteHeader: FC<WebsiteHeaderProps> = ({ pageTitle }): JSX.Element => {
  return (
    <header className="bg-[#ffffff] text-black ">
      <div className="container mx-auto flex justify-between items-center">
        <div>{pageTitle}</div>
        <div className="flex justify-center mt-5">
        <UserProfileCapsule userName="John Doe" userType="Student" />
      </div>
      </div>
    </header>
  );
};

export default WebsiteHeader;
