import { FC } from "react";
import Image from "next/image";

import LoginForm from "@/components/Forms/LoginForm/LoginForm";

import sahyadriLogo from "@/assets/images/sahyadri-logo.png";

import "./loginLayout.css";

const LoginLayout: FC = (): JSX.Element => {
  return (
    <div className="main-container grid lg:grid-cols-2">
      <div className="shadow absolute"/>

      <div className="z-10 text-white md:flex lg:flex-col justify-center md:items-start items-center lg:pl-10 hidden lg:pt-0 pt-10">
        <Image
          src={sahyadriLogo}
          height={150}
          width={150}
          alt="Logo"
          className="lg:pb-10"
          priority
        />

        <div className="pl-3">
          <p className="font-light leading-none">Welcome To</p>
          <p className="lg:text-[5em] text-[3em] font-extrabold">Sahyadri</p>
          <p className="lg:text-[2.5em] text-[1.75em]">Stundent Event Management System</p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginLayout;
