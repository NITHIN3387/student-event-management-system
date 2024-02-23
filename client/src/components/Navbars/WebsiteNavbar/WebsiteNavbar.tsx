"use client"

import React, { FC, useState } from 'react'
import SideNavbar from '@/components/Navbars/SideNavbar/SideNavbar'

const Navbar: FC = (): JSX.Element => {
  const [authUser, setAuthUser] = useState(true)

  return authUser ? <SideNavbar /> : <SideNavbar />
}

export default Navbar