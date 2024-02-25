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
        Hello From Layout
      </div>
    </div>
  )
}

export default MyParticipationLayout