import React, { FC, ReactNode } from 'react'

interface propsType {
  children: ReactNode
}

const WebsiteLayout: FC<propsType> = ({ children }): JSX.Element => {
  return (
    <div>
      {children}
    </div>
  )
}

export default WebsiteLayout