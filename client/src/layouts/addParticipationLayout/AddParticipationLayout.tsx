import AddParticipationForm from '@/components/Forms/AddParticipationForm/AddParticipationForm'
import React, { FC, ReactNode } from 'react'

interface propsType {
  children: ReactNode,
}

const AddParticipationLayout: FC<propsType> = ({ children }): JSX.Element => {
  return (
    <div className='flex flex-col overflow-scroll'>
      { children }
      <div className='bg-white h-full rounded-lg p-4 overflow-scroll'>
        <AddParticipationForm />
      </div>
    </div>
  )
}

export default AddParticipationLayout