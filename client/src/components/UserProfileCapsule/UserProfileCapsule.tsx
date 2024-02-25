import React, { FC } from "react";
import Image from "next/image";
import LoginLogo from "@/assets/images/login.png";

interface UserProfileCapsuleProps {
  userName: string;
  userType: string;
}

const UserProfileCapsule: FC<UserProfileCapsuleProps> = ({ userName, userType }) => {
  return (
    <div className="flex items-center">
      <span className="mr-2 mx-4 mb-6">{userName}</span>
      <div className="flex-row">
      <Image
        src={LoginLogo}
        height={30}
        width={30}
        alt="logo"
        className=" mx-6"
      />
      <span className="ml-3 mx-1 my-0">{userType}</span>
      </div>
      
    </div>
  );
};

export default UserProfileCapsule;
