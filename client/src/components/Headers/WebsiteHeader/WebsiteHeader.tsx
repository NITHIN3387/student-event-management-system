"use client";

import React, { FC, ReactNode, useEffect, useState } from "react";
import UserProfileCapsule from "@/components/UserProfileCapsule/UserProfileCapsule";
import { useAuth } from "@/contexts/authUser.context";

interface WebsiteHeaderProps {
  pageTitle?: ReactNode;
}

const WebsiteHeader: FC<WebsiteHeaderProps> = (): JSX.Element => {
  const authUser = useAuth();

  const [name, setName] = useState<string | undefined>("");
  const [designation, setDesignation] = useState<string>("");

  useEffect(() => {
    if (authUser?.SID) {
      setName(authUser.SNAME);
      setDesignation("Student");
    }
    if (authUser?.FID) {
      setName(authUser.FNAME);
      authUser.HOD
        ? setDesignation("Head of Department")
        : setDesignation("Faculty");
    }
  }, [authUser]);

  return (
    <header className="flex justify-between items-center px-7 py-3">
      <h1 className="text-3xl font-semibold">My Participation</h1>
      <UserProfileCapsule userName={name} userType={designation} />
    </header>
  );
};

export default WebsiteHeader;
