import { FC } from "react";
import Image from "next/image";

import LoginForm from "@/components/LoginForm/LoginForm";

import sahyadriLogo from "@/assets/images/sahyadri-logo.png";

import "./loginLayout.css";

const LoginLayout: FC = (): JSX.Element => {
  return (
    <div className="main-container grid grid-cols-2 ">
        
      <div className="shadow absolute" />

      <div className="z-10 text-white flex flex-col justify-center pl-10">
        <Image
          src={sahyadriLogo}
          height={150}
          width={150}
          alt="Logo"
          className="pb-10"
          priority
        />

        <div className="pl-3">
          <p className="font-light leading-none">Welcome To</p>
          <p className="text-[5em] font-extrabold">Sahyadri</p>
          <p className="text-[2.5em]">Stundent Event Management System</p>
        </div>
      </div>

      <div className="flex justify-center items-center z-20">
        <LoginForm/>

      </div>
    </div>
  );
};

export default LoginLayout;
