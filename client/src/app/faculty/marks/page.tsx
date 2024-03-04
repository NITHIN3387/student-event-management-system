"use client";

import FilterHeader from "@/components/Headers/FilterHeader/FilterHeader";
import EditableTable from "@/components/Tables/EditableTable/EditableTable";
import React, { useEffect, useState } from "react";

interface responceType {
  ASSIGNMENT: number;
  IA1: number;
  IA2: number;
  IA3: number;
  SID: string;
  SNAME: string;
  USN: string;
}

const tableRowVal = ["Name", "USN", "IA-1", "IA-2", "IA-3", "Assignment"];

const Page = () => {
  const editableCols: Array<boolean> = [false, false, true, true, true, true];

  const [tableColVal, setTableColVal] = useState<Array<string | number>[]>([]);
  const [semester, setSemester] = useState<number>(0)
  const [section, setSection] = useState<string>("")
  const [course, setCourse] = useState<string>("")
  const [IA1, setIA1] = useState<number>(0);
  const [IA2, setIA2] = useState<number>(0);
  const [IA3, setIA3] = useState<number>(0);
  const [assignment, setAssignment] = useState<number>(0);

  useEffect(() => {
    const fetchMarks = async () => {
      const url = process.env.NEXT_PUBLIC_SERVER_URL + `/marks/${semester}/${section}/${course}`      
      const responce: responceType[] = await fetch(url).then(res =>  res.json())

      setTableColVal(() => (
        responce.map(mark => (
          [mark.SNAME, mark.SID, mark.IA1, mark.IA2, mark.IA3, mark.ASSIGNMENT]
        ))
      ))
    }

    if (semester > 0 && section.length && course.length)
      fetchMarks()
  }, [semester, section, course, tableColVal])

  const handleSubmit = async (sid: string | number) => {
    const url = process.env.NEXT_PUBLIC_SERVER_URL + "/marks/" + sid
    const data = {
      IA1,
      IA2,
      IA3,
      ASSIGNMENT: assignment
    }

    const responce = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data)
    }).then(res => res.json())

    console.log(IA1, IA2, IA3, assignment);
    console.log(responce);
  };

  return (
    <div className="flex flex-col gap-7">
      <FilterHeader 
        semester={semester}
        setSemester={setSemester}
        section={section}
        setSection={setSection}
        course={course}
        setCourse={setCourse}
      />
      {tableColVal.length ?
        <EditableTable
          tableRowVal={tableRowVal}
          tableColVal={tableColVal}
          editableCols={editableCols}
          onChangeVals={[
            () => {},
            () => {},
            setIA1,
            setIA2,
            setIA3,
            setAssignment,
          ]}
          onSubmit={handleSubmit}
        /> :
        semester > 0 && section.length && course.length ?
          <h1 className="text-2xl text-center bg-white rounded-md p-7">No Students marks found</h1> :
          <h1 className="text-2xl text-center text-red-500 bg-white rounded-md p-7">Please Select the Semester, Section and Course to show marks</h1>
      }
    </div>
  );
};

export default Page;
