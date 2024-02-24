"use client";

import React, { FC, useState } from "react";
import SideNavbar from "@/components/Navbars/SideNavbar/SideNavbar";
import Dashboard from "@/assets/icons/Dashboard";
import { useAuth } from "@/contexts/authUser.context";

interface NavListType {
  label: string;
  icon: JSX.Element;
  link: string;
}

const StudentNavList: NavListType[] = [
  {
    label: "Dashboard",
    icon: <Dashboard height={25} width={25} />,
    link: "/student/dashboard",
  },
  {
    label: "Create",
    icon: <Dashboard height={25} width={25} />,
    link: "/student/dashboard",
  },
];

const Navbar: FC = (): JSX.Element => {
  const authUser = useAuth();

  return authUser?.SID?.startsWith("4SF") ? (
    <SideNavbar navList={StudentNavList} />
  ) : (
    <SideNavbar />
  );
};

export default Navbar;
