"use client";

import AlertIcon from "@/assets/icons/AlertIcon";
import { useAuth } from "@/contexts/authUser.context";
import { usePathname } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

const AccessAlertModel: FC = (): JSX.Element => {
  const [hidden, setHidden] = useState<boolean>(true);

  const authuser = useAuth()
  const pathName = usePathname()

  useEffect(() => {
    if (pathName.startsWith("/student"))
      authuser?.SID?.startsWith("4SF") ? setHidden(true) : setHidden(false)
    
    if (pathName.startsWith("/faculty"))
      authuser?.FID?.startsWith("FA") && !authuser.SID ? setHidden(true) : setHidden(false)
  }, [pathName, authuser])

  return (
    <div
      className={
        (hidden ? "hidden" : "") +
        " absolute h-screen w-full backdrop-blur-sm backdrop-brightness-50 top-0 left-0 flex justify-center items-center"
      }
    >
      <div className="bg-white sm:p-10 p-5 rounded-xl flex flex-col items-center gap-3 text-red-500">
        <AlertIcon width={200} height={200}/>
        <h1 className=" text-2xl font-bold">YOU DON&apos;T HAVE ACCESS</h1>
        <h2 className=" text-xl font-semibold">TO THIS PAGE</h2>
      </div>
    </div>
  );
};

export default AccessAlertModel;
