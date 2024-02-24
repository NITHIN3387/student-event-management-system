import UserProfileCapsule from '@/components/UserProfileCapsule/UserProfileCapsule'
import React, { FC } from 'react'
interface HeaderProps {
  pageTitle: string;
}

const WebsiteHeader: FC = (): JSX.Element => {
  return (
    <div>
      WebsiteHeader
      <UserProfileCapsule />
    </div>
  )
}

export default WebsiteHeader