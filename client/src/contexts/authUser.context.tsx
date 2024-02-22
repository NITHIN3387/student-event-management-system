"use client"

import { FC, ReactNode, createContext, useContext, useEffect, useState } from "react";

interface propsType {
  children: ReactNode
}

interface studentType {
  sid?: string,
  sname?: string,
  password?: string,
  semester?: number,
  section?: string,
  bid?: string,
  fid?: string | null
}

interface facultyType {
  fid?: string,
  fname?: string,
  password?: string,
  semester?: number,
  did?: string,
  hod?: string,
}

const authUserContext = createContext<studentType & facultyType | null>(null)

const useAuth = () => useContext(authUserContext)

const AuthUserProvider: FC<propsType> = ({ children }): JSX.Element => {
  const [authUser, setAuthUser] = useState<studentType & facultyType | null>(null)

  useEffect(() => {
    const fetchAuthUser = async () => {
      const URL = process.env.NEXT_PUBLIC_SERVER_URL as string + "/auth/user"

      const responce = await fetch(URL, {
        method: "GET",
        credentials: "include"
      })

      if (responce.status === 200) {
        const user: studentType & facultyType = await responce.json()

        setAuthUser(user)
      }
    }

    fetchAuthUser()
  }, [])

  return (
    <authUserContext.Provider value={authUser}>
      {children}
    </authUserContext.Provider>
  )
}

export default  AuthUserProvider
export { useAuth }