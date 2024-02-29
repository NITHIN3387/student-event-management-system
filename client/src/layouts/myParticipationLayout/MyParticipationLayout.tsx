"use client"

import ParticipationCard from '@/components/Cards/ParticipationCard/ParticipationCard'
import Loader from '@/components/Loaders/Loader/Loader'
import React, { FC, ReactNode, useEffect, useState } from 'react'

interface propsType {
  children: ReactNode,
}

const MyParticipationLayout: FC<propsType> = ({ children }): JSX.Element => {
  const [loader, setLoader] = useState<boolean>(true)
  const [participateEvent, setParticipateEvent] = useState([])

  useEffect(() => {
    const fetchUserParticipateEvent = async () => {
      const URL = process.env.NEXT_PUBLIC_SERVER_URL + "/participate"

      const responce = await fetch(URL, {
        method: "GET",
        credentials: "include"
      }).then((res) => res.json())

      setParticipateEvent(responce)
      setLoader(false)
    }

    fetchUserParticipateEvent()
  }, [participateEvent])

  if (loader) return <Loader />

  return (
    <div className='flex flex-col overflow-scroll'>
      <div>
        {children}
      </div>
      <div className='overflow-scroll rounded-lg h-full flex flex-col gap-4' >
        { participateEvent.length ? 
            participateEvent.map((event, index) => <div key={index}><ParticipationCard event={event}/></div>) :
            <h1 className='text-center text-3xl font-bold mt-7'>You did&apos;n participated to any event at 😔;</h1>
        }
      </div>
    </div>
  )
}

export default MyParticipationLayout