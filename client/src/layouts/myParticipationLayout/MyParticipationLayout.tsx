"use client"

import ParticipationCard from '@/components/Cards/ParticipationCard/ParticipationCard'
import React, { FC, ReactNode, useEffect, useState } from 'react'

interface propsType {
  children: ReactNode,
}

const MyParticipationLayout: FC<propsType> = ({ children }): JSX.Element => {
  const [participateEvent, setParticipateEvent] = useState([])

  useEffect(() => {
    const fetchUserParticipateEvent = async () => {
      const URL = process.env.NEXT_PUBLIC_SERVER_URL + "/participate"

      const responce = await fetch(URL, {
        method: "GET",
        credentials: "include"
      }).then((res) => res.json())

      setParticipateEvent(responce)
    }

    fetchUserParticipateEvent()
  }, [])

  return (
    <div className='flex flex-col overflow-scroll'>
      <div>
        {children}
      </div>
      <div className='overflow-scroll rounded-lg h-full flex flex-col gap-4' >
        { participateEvent.map((event, index) => <div key={index}><ParticipationCard event={event}/></div>) }
      </div>
    </div>
  )
}

export default MyParticipationLayout