import { FC, ReactNode } from 'react'

import WebsiteHeader from '@/components/Headers/WebsiteHeader/WebsiteHeader'
import Navbar from '@/components/Navbars/WebsiteNavbar/WebsiteNavbar'
import AuthUserProvider from '@/contexts/authUser.context'

import './websiteLayout.css'
import AccessAlertModel from '@/components/AccessAlertModel/AccessAlertModel'

interface propsType {
  children: ReactNode
}

const WebsiteLayout: FC<propsType> = ({ children }): JSX.Element => {
  return (
    <AuthUserProvider>
      <div className='grid grid-cols-[auto_1fr] website-container'>
        <div>
          <Navbar />
        </div>

        <div className='flex flex-col max-h-screen'>
          <div>
            <WebsiteHeader />
          </div>
          
          <div className='bg-[#f0f2f5] p-7 grid overflow-y-scroll h-full'>
            {children}
          </div>
        </div>
      </div>
      <AccessAlertModel/>
    </AuthUserProvider>
  )
}

export default WebsiteLayout