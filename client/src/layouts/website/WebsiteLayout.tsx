import { FC, ReactNode } from 'react'

import WebsiteHeader from '@/components/Headers/WebsiteHeader/WebsiteHeader'
import Navbar from '@/components/Navbars/WebsiteNavbar/WebsiteNavbar'

import './websiteLayout.css'

interface propsType {
  children: ReactNode
}

const WebsiteLayout: FC<propsType> = ({ children }): JSX.Element => {
  return (
    <div className='grid grid-cols-[auto_1fr] website-container'>
      <div>
        <Navbar />
      </div>

      <div className='grid grid-rows-[auto_1fr]'>
        <div>
          <WebsiteHeader />
        </div>
        
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default WebsiteLayout