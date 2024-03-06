"use client";

import React, { FC, useState, useEffect } from "react";
import FilterHeader from "@/components/Headers/FilterHeader/FilterHeader";
import TableWithSubRowWithAction from "@/components/Tables/TableWithSubRowWithAction/TableWithSubRowWithAction";

interface tableColValType {
  colVal: Array<string | number>;
  reason: {
    Ename: string;
    date: string;
  };
  grant: {
    pid: number;
    subid: string;
    sid: string;
  }
}

interface responceType {
  COUNT: number;
  ENAME: string;
  START_DATE: string;
  SUBNAME: string;
  PID: number;
  SUBID: string;
  SID: string;
  SNAME: string;
}

const tableRowVal = ["Student Name", "USN", "Subject", "Count"];

const Page: FC = (): JSX.Element => {
  const [semester, setSemester] = useState<number>(0);
  const [section, setSection] = useState<string>("");
  const [course, setCourse] = useState<string>("")
  const [tableColVal, setTableColVal] = useState<tableColValType[]>([]);


  useEffect(() => {
    const fetchPendingAttendence = async () => {
      const url = process.env.NEXT_PUBLIC_SERVER_URL + `/pending-attendence/${semester}/${section}/${course}`;

      const responce: responceType[] = await fetch(url, {
        method: "GET",
        credentials: "include",
      }).then((res) => res.json());

      setTableColVal(
        responce.map(items => ({
          colVal: [items.SNAME, items.SID, items.SUBNAME, items.COUNT],
          reason: {
            Ename: items.ENAME,
            date: items.START_DATE.split('T')[0]
          },
          grant: {
            pid: items.PID,
            subid: items.SUBID,
            sid: items.SID
          }
        }))
      )
    };

    if (semester > 0 && section.length && course.length) fetchPendingAttendence();
  }, [semester, section, course, tableColVal]);

  const handleGrantAttendence = async (pid: number, subid: string, count: string | number, sid: string) => {    
    const URL1 = process.env.NEXT_PUBLIC_SERVER_URL + `/attendence/increment/${sid}`;

    await fetch(URL1, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ subid: subid, count: count })
    }).then(res => res.json())

    const URL2 = process.env.NEXT_PUBLIC_SERVER_URL + `/pending-attendence/${pid}/${subid}` ;
    
    await fetch(URL2, {
      method: "DELETE",
      credentials: "include",
    }).then((res) => res.json());
    
  }

  return (
    <div>
      <FilterHeader
        semester={semester}
        setSemester={setSemester}
        section={section}
        setSection={setSection}
        course={course}
        setCourse={setCourse}
      />

      <div className="mt-7">
      {tableColVal.length ?
        <TableWithSubRowWithAction tableRowVal={tableRowVal} tableColVal={tableColVal} onClickUpdate={handleGrantAttendence}/> :
        semester > 0 && section.length && course.length ?
          <h1 className="text-2xl text-center bg-white rounded-md p-7">No Mentees were there in mentioned semester and section</h1> :
          <h1 className="text-2xl text-center text-red-500 bg-white rounded-md p-7">Please Select the Semester, Section to show mentees list</h1>
      }
      </div>
    </div>
  );
};

export default Page;