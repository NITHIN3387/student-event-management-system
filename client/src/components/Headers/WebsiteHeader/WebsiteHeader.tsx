import React, { FC } from "react";
import UserProfileCapsule from "@/components/UserProfileCapsule/UserProfileCapsule";

const WebsiteHeader: FC = (): JSX.Element => {
  return (
    <header className="flex justify-between items-center px-7 py-3">
      <h1 className="text-3xl font-semibold">My Participation</h1>
      <UserProfileCapsule />
    </header>
  );
};

export default WebsiteHeader;
