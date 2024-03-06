"use client";

import React, { FC, useState, useEffect } from "react";
import FilterHeader from "@/components/Headers/FilterHeader/FilterHeader";
import Link from "next/link";
import AddIcon from "@/assets/icons/AddIcone";
import DeletableTable from "@/components/Tables/DeletableTable/DeletableTable";
interface ResponseType {
  SID: string;
  SNAME: string;
}
const tableRowVal = ["Student Name", "USN"];

const Page: FC = (): JSX.Element => {
  const [semester, setSemester] = useState<number>(0);
  const [section, setSection] = useState<string>("");
  const [tableColVal, setTableColVal] = useState<Array<Array<string | number>>>(
    []
  );

  useEffect(() => {
    const fetchStudentsDetail = async () => {
      const url =
        process.env.NEXT_PUBLIC_SERVER_URL + `/student/${semester}/${section}`;
      const responce: ResponseType[] = await fetch(url, {
        method: "GET",
        credentials: "include",
      }).then((res) => res.json());
      setTableColVal(responce.map((student) => [student.SNAME, student.SID]));
    };

    if (semester > 0 && section) fetchStudentsDetail();
  }, [semester, section, tableColVal]);

  const handleDelete = async (sid: string | number) => {
    const URL = process.env.NEXT_PUBLIC_SERVER_URL + `/student/delete-mentee/` + sid;

    await fetch(URL, {
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
        courseEntryNeeded={false}
      />

      <div className="mt-7">
      {tableColVal.length ?
        <DeletableTable tableRowVal={tableRowVal} tableColVal={tableColVal} onClickDelete={handleDelete}/> :
        semester > 0 && section.length ?
          <h1 className="text-2xl text-center bg-white rounded-md p-7">No Mentees were there in mentioned semester and section</h1> :
          <h1 className="text-2xl text-center text-red-500 bg-white rounded-md p-7">Please Select the Semester, Section to show mentees list</h1>
      }
      </div>

      <Link
        href="/faculty/myMentees/AddMyMentees"
        className="flex fixed bottom-4 right-4 p-1 items-center gap-2 bg-primary-color text-white font-semibold px-2 py-1 rounded-lg"
      >
        <AddIcon height={35} width={35} />
        <span>Add More</span>
      </Link>
    </div>
  );
};

export default Page;
