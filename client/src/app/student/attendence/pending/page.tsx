"use client";

import TableWithSubRow from "@/components/Tables/TableWithSubRow/TableWithSubRow";
import React, { FC, useEffect, useState } from "react";

interface tableColValType {
  colVal: Array<string | number>;
  reason: {
    Ename: string;
    date: string;
  };
}

interface responceType {
  COUNT: number;
  ENAME: string;
  START_DATE: string;
  SUBNAME: string;
}

const tableRowVal: Array<string> = ["Subject", "Count"];

const Page: FC = (): JSX.Element => {
  const [tableColVal, setTableColVal] = useState<tableColValType[]>([]);

  useEffect(() => {
    const fetchPendingAttendence = async () => {
      const url = process.env.NEXT_PUBLIC_SERVER_URL + "/pending-attendence";

      const responce: responceType[] = await fetch(url, {
        method: "GET",
        credentials: "include",
      }).then((res) => res.json());

      setTableColVal(
        responce.map(items => ({
          colVal: [items.SUBNAME, items.COUNT],
          reason: {
            Ename: items.ENAME,
            date: items.START_DATE.split('T')[0]
          }
        }))
      )
    };

    fetchPendingAttendence();
  }, []);

  return (
    <div className="mt-7 h-[30rem] overflow-scroll">
      {tableColVal.length ? 
        <TableWithSubRow tableRowVal={tableRowVal} tableColVal={tableColVal} />
        : <h1 className="text-center text-3xl font-bold mt-7"> No Pending Attendence </h1>
      }
    </div>
  );
};

export default Page;
