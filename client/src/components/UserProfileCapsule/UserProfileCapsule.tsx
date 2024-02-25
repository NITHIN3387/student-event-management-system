import React, { FC } from "react";
import Image from "next/image";
import LoginLogo from "@/assets/images/profile.png";

interface UserProfileCapsuleProps {
  userName: string;
  userType: string;
}

const UserProfileCapsule: FC<UserProfileCapsuleProps> = ({ userName, userType }) => {
  return (
    <div className="flex items-center px-2 py-1 rounded-full border border-gray-500 cursor-pointer">
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
        <span className="font-bold block">{userName}</span>
        <span className="text-xs text-gray-500 hover:text-gray-700 block">{userType}</span>
      </div>
    </div>
  );
};

export default UserProfileCapsule;
