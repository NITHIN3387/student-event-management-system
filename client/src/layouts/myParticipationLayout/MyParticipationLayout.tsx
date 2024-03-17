"use client";

import ParticipationCard from "@/components/Cards/ParticipationCard/ParticipationCard";
import Loader from "@/components/Loaders/Loader/Loader";
import React, { FC, ReactNode, useEffect, useState } from "react";

interface propsType {
  children: ReactNode;
  search: string;
}

interface responceType {
  AWARD: string;
  CERTIFICATE: string;
  EID: number;
  ENAME: string;
  END_DATE: string;
  EPLACE: string;
  ETYPE: string;
  PID: number;
  SID: string;
  START_DATE: string;
  STATUS: string;
}

const MyParticipationLayout: FC<propsType> = ({
  children,
  search,
}): JSX.Element => {
  const [loader, setLoader] = useState<boolean>(true);
  const [participateEvent, setParticipateEvent] = useState<responceType[]>([]);

  useEffect(() => {
    const fetchUserParticipateEvent = async () => {
      const URL = process.env.NEXT_PUBLIC_SERVER_URL + "/participate";

      const responce: responceType[] = await fetch(URL, {
        method: "GET",
        credentials: "include",
      }).then((res) => res.json());

      setParticipateEvent(
        responce.filter((events) => events.ENAME.toLowerCase().includes(search.toLowerCase()))
      );
      setLoader(false);
    };

    fetchUserParticipateEvent();
  }, [participateEvent]);

  if (loader) return <Loader />;

  return (
    <div className="flex flex-col overflow-scroll">
      <div>{children}</div>
      <div className="overflow-scroll rounded-lg h-full flex flex-col gap-4">
        {participateEvent.length ? (
          participateEvent.map((event, index) => (
            <div key={index}>
              <ParticipationCard event={event} />
            </div>
          ))
        ) : search.length ? (
          <h1 className="text-center text-3xl font-bold mt-7">
            No Events Found
          </h1>
        ) : (
          <h1 className="text-center text-3xl font-bold mt-7">
            You did&apos;n participated to any event at 😔;
          </h1>
        )}
      </div>
    </div>
  );
};

export default MyParticipationLayout;
