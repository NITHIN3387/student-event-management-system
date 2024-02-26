import AddParticipationLayout from '@/layouts/addParticipationLayout/AddParticipationLayout'
import React, { FC } from 'react'

const page: FC = (): JSX.Element => {
  return (
    <AddParticipationLayout>
      <h1 className='text-2xl font-semibold mb-7 border-l-[5px] pl-5 border-primary-color'>Add Event Details</h1>
    </AddParticipationLayout>
  )
}

export default page