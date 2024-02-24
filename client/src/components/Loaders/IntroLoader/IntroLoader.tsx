"use client";

import { useAuth } from "@/contexts/authUser.context";
import React, { useEffect, useState } from "react";

import Logo from "@/assets/images/sahyadri-logo.png"
import Image from "next/image";

import "./IntroLoader.css"

const IntroLoader = () => {
  const [hidden, setHidden] = useState(false);
  const [loaderHidden, setloaderHidden] = useState(true);

  const authuser = useAuth();

  useEffect(() => {
    setTimeout(() => {
      if (authuser){
        setHidden(true)
        setloaderHidden(true)
      }else {
        setHidden(false);
        setloaderHidden(false)
      }
    }, 1000);
  }, [authuser]);

  return (
    <div
      className={
        (hidden ? "hidden" : "") +
        " absolute h-screen w-full bg-white top-0 left-0 flex justify-center items-center z-10"
      }
    >
      <div className="animate-load flex flex-col items-center">
        <Image src={Logo} width={200} alt="Logo"/>
        <div>
          { loaderHidden ? "" : "Loading..." }
        </div>
        <div className="text-center p-5">
          <h3 className="text-[1.25em] mb-2">Welcome To</h3>
          <h1 className="text-[2em]">Sahyadri Student Event Management System</h1>
        </div>
      </div>
    </div>
  );
};

export default IntroLoader;
