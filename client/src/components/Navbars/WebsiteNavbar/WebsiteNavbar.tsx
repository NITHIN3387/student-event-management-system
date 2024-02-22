"use client"

import React, { FC, useState } from 'react'
import StudentNavbar from './studentNavbar/StudentNavbar'
import FacultyNavbar from './facultyNavbar/FacultyNavbar'

const Navbar: FC = (): JSX.Element => {
  const [authUser, setAuthUser] = useState(true)

  return authUser ? <StudentNavbar /> : <FacultyNavbar />
}

export default Navbar