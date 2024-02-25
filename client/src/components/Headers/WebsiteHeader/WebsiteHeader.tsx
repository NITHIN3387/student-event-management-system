// WebsiteHeader.tsx
import React, { FC, ReactNode } from "react";
import UserProfileCapsule from "@/components/UserProfileCapsule/UserProfileCapsule";

interface WebsiteHeaderProps {
  pageTitle?: ReactNode;
}

const WebsiteHeader: FC<WebsiteHeaderProps> = (): JSX.Element => {
  return (
    <header className="flex justify-between items-center px-7 py-3">
        <h1 className="text-3xl font-semibold">My Participation</h1>
        <UserProfileCapsule userName="John Doe" userType="Student" />
    </header>
  );
};

export default WebsiteHeader;
