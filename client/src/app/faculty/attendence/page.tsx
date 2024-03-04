"use client";

import FilterHeader from "@/components/Headers/FilterHeader/FilterHeader";
import EditableTable from "@/components/Tables/EditableTable/EditableTable";
import React, { useEffect, useState } from "react";

interface responceType {
  SID: string;
  SNAME: string;
  CONDUCTED: string;
  PRESENT: string;
}

const tableRowVal = ["Name", "USN", "Class Conducted", "Present"];

const Page = () => {
  const editableCols: Array<boolean> = [false, false, true, true];

  const [tableColVal, setTableColVal] = useState<Array<string | number>[]>([]);
  const [semester, setSemester] = useState<number>(0)
  const [section, setSection] = useState<string>("")
  const [course, setCourse] = useState<string>("")
  const [conducted, setConducted] = useState<number>(0);
  const [present, setPresent] = useState<number>(0);

  useEffect(() => {
    const fetchAttendence = async () => {
      const url = process.env.NEXT_PUBLIC_SERVER_URL + `/attendence/${semester}/${section}/${course}`      
      const responce: responceType[] = await fetch(url).then(res =>  res.json())

      setTableColVal(() => (
        responce.map(attendence => (
          [attendence.SNAME, attendence.SID, attendence.CONDUCTED, attendence.PRESENT]
        ))
      ))
    }

    if (semester > 0 && section.length && course.length)
      fetchAttendence()
  }, [semester, section, course, tableColVal])

  const handleSubmit = async (sid: string | number) => {
    const url = process.env.NEXT_PUBLIC_SERVER_URL + "/attendence/" + sid
    const data = {
      conducted,
      present
    }

    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data)
    }).then(res => res.json())
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
            setConducted,
            setPresent
          ]}
          onSubmit={handleSubmit}
        /> :
        semester > 0 && section.length && course.length ?
          <h1 className="text-2xl text-center bg-white rounded-md p-7">No Students attendence found</h1> :
          <h1 className="text-2xl text-center text-red-500 bg-white rounded-md p-7">Please Select the Semester, Section and Course to show attendence</h1>
      }
    </div>
  );
};

export default Page;