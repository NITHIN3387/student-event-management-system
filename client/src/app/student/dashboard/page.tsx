"use client";

import CountDisplayCard from "@/components/Cards/CountDisplayCard/CountDisplayCard";
import PieChart from "@/components/Graphs/PieChart/PieChart";
import Loader from "@/components/Loaders/Loader/Loader";
import React, { FC, useEffect, useState } from "react";

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

interface pieChartValueType {
  value: string
  count: number
}

const Page: FC = (): JSX.Element => {
  const [loader, setLoader] = useState<boolean>(true);
  const [pieChartValue, setPieChartValue] = useState<pieChartValueType[]>([])
  const [totalEventApplied, setTotalEventApplied] = useState<number>(0)
  const [countCardVal, setCountCardVal] = useState([
    { color: "#1976D2", heading: "Events", subheading: "Applied", count: 0 },
    { color: "#757575", heading: "Pending", subheading: "Events", count: 0 },
    { color: "#FFD600", heading: "Approved", subheading: "Events", count: 0 },
    { color: "#4CAF50", heading: "Varified", subheading: "Events", count: 0 },
  ])

  useEffect(() => {
    const fetchUserParticipateEvent = async () => {
      const URL = process.env.NEXT_PUBLIC_SERVER_URL + "/participate";

      const responce: responceType[] = await fetch(URL, {
        method: "GET",
        credentials: "include",
      }).then((res) => res.json());

      setLoader(false);
      setTotalEventApplied(responce.length)
      setCountCardVal((pre) => {
        const count: any = {
          Events: responce.length,
          Pending: 0,
          Approved: 0,
          Varified: 0
        }

        responce.forEach((ele) => count[ele.STATUS] += 1)

        return pre.map((item) => ({
          color: item.color,
          heading: item.heading,
          subheading: item.subheading,
          count: (count[item.heading] || item.count)
        }))
      })
      setPieChartValue(() => {
        const count: any = {
          Hackathon: 0,
          Conference: 0,
          "Paper presentaion": 0,
          Placement: 0,
          NPTEL: 0,
          Internship: 0,
          Volunteering:0,
          Cultural: 0,
          Sports: 0,
          Other: 0,
        }

        responce.forEach((ele) => count[ele.ETYPE] += 1)

        const types = Object.keys(count)
        return types.map((type) => ({ value: type, count: count[type] }))
      })
    };

    fetchUserParticipateEvent();
  }, []);

  if (loader) return <Loader />;

  return (
    <div className="grid grid-cols-4 w-full h-fit gap-7">
      <div className="grid grid-cols-2 gap-7 col-span-2">
        {countCardVal.map((item) => (
          <React.Fragment key={item.heading}>
            <CountDisplayCard
              color={item.color}
              heading={item.heading}
              subheading={item.subheading}
              count={item.count}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="bg-white col-span-2 rounded-md grid grid-cols-[auto_1fr] p-7 gap-10">
        <PieChart data={pieChartValue} total={totalEventApplied} />
      </div>
    </div>
  );
};

export default Page;
