"use client"

import { FC, ReactNode, createContext, useContext, useEffect, useState } from "react";

interface propsType {
  children: ReactNode
}

interface studentType {
  SID?: string,
  SNAME?: string,
  PASSWORD?: string,
  SEMESTER?: number,
  SECTION?: string,
  BID?: string,
  FID?: string | null
}

interface facultyType {
  FID?: string,
  FNAME?: string,
  PASSWORD?: string,
  DID?: string,
  HOD?: string,
}

const authUserContext = createContext<(studentType & facultyType) | null>(null)

const useAuth = () => useContext(authUserContext)

const AuthUserProvider: FC<propsType> = ({ children }): JSX.Element => {
  const [authUser, setAuthUser] = useState<(studentType & facultyType) | null>(null)

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