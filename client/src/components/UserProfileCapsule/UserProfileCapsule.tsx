"use client"

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import LoginLogo from "@/assets/images/profile.png";
import { useAuth } from "@/contexts/authUser.context";
import { useRouter } from "next/navigation";
import LogoutIcon from "@/assets/icons/LogoutIcon";
import PasswordIcon from "@/assets/icons/PasswordIcon";

const UserProfileCapsule: FC = () => {
  const authUser = useAuth();
  const router = useRouter()

  const [name, setName] = useState<string | undefined>("");
  const [designation, setDesignation] = useState<string>("");
  const [showMoreOption, setShowMoreOption] = useState<boolean>(false)

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

  const handleLogout = async () => {
    const url = process.env.NEXT_PUBLIC_SERVER_URL + "/auth/logout"

    const responce = await fetch(url, {
      method: "GET",
      credentials: "include"
    })

    if (responce.status === 200) router.push('/')
  }

  return (
    <div className="flex items-center pl-2 pr-4 py-1 rounded-full border border-gray-500 cursor-pointer relative" onClick={() => setShowMoreOption((pre) => !pre)}>
      <div className={`${showMoreOption ? "grid items-center" : "hidden"} absolute top-14 right-0 bg-white rounded-md border w-[12rem] shadow-md`} onMouseLeave={() => setShowMoreOption(false)}>
        {/* <button className="p-2 hover:bg-slate-200 text-left grid grid-cols-[auto_1fr] gap-3 text-blue-500">
          <PasswordIcon width={25} height={25}/>
          <span>Change Password</span>
        </button>
        <hr /> */}
        <button className="p-2 hover:bg-slate-200 text-left grid grid-cols-[auto_1fr] gap-3 text-red-500" onClick={handleLogout}>
          <LogoutIcon width={25} height={25}/>
          <span>Log Out</span>
        </button>
      </div>
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
