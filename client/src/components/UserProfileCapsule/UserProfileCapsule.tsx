"use client"

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import LoginLogo from "@/assets/images/profile.png";
import { useAuth } from "@/contexts/authUser.context";

const UserProfileCapsule: FC = () => {
  const authUser = useAuth();

  const [name, setName] = useState<string | undefined>("");
  const [designation, setDesignation] = useState<string>("");

  useEffect(() => {    
    if (authUser?.SID) {
      setName(authUser.SNAME);
      setDesignation("Student");
    }

    if (!authUser?.SID) {
      setName(authUser?.FNAME);
      authUser?.HOD === "true"
        ? setDesignation("Head of Department")
        : setDesignation("Faculty");
    }
  }, [authUser]);

  return (
    <div className="flex items-center pl-2 pr-4 py-1 rounded-full border border-gray-500 cursor-pointer">
      <div className="flex-shrink-0 border-2 border-gray-400 rounded-full">
        <Image
          src={LoginLogo}
          height={30}
          width={30}
          alt="logo"
          className=""
        />
      </div>
      <div className="ml-4">
        <span className="font-bold block">{name}</span>
        <span className="text-xs text-gray-500 hover:text-gray-700 block">{designation}</span>
      </div>
    </div>
  );
};

export default UserProfileCapsule;
