// WebsiteHeader.tsx
import React, { FC } from "react";
import UserProfileCapsule from "@/components/UserProfileCapsule/UserProfileCapsule";
import { useRouter } from "next/router";

const WebsiteHeader: FC = (): JSX.Element => {
  const router = useRouter();
  const pageTitle = router.pathname.slice(1).replace('-', ' '); // Extract page title from the URL

  return (
    <header className="flex justify-between items-center px-7 py-3">
      <h1 className="text-3xl font-semibold">{pageTitle}</h1>
      <UserProfileCapsule />
    </header>
  );
};

export default WebsiteHeader;
