import ParticipationCard from '@/components/Cards/ParticipationCard/ParticipationCard'
import React, { FC, ReactNode } from 'react'

interface propsType {
  children: ReactNode,
}

const MyParticipationLayout: FC<propsType> = ({ children }): JSX.Element => {
  return (
    <div className='flex flex-col overflow-scroll'>
      <div>
        {children}
      </div>
      <div className='bg-white overflow-scroll p-3 rounded-lg h-full' >
        <ParticipationCard />
      </div>
    </div>
  )
}

export default MyParticipationLayout