import TabsNavbar from '@/components/Navbars/TabsNavbar/TabsNavbar'
import React, { FC, ReactNode } from 'react'

const tabNavbarList = [
  { label: "Pending", link: "/faculty/menteesParticipation" },
  { label: "Approved", link: "/faculty/menteesParticipation/approved" }
]

const Rootlayout: FC<{ children: ReactNode }> = ({children}) => {
  return (
    <div>
      <TabsNavbar navList={tabNavbarList}/>
      {children}
    </div>
  )
}

export default Rootlayout