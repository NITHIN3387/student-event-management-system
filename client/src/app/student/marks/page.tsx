"use client";

import Loader from "@/components/Loaders/Loader/Loader";
import Table from "@/components/Tables/Table/Table";
import React, { useEffect, useState } from "react";

interface responceType {
  ASSIGNMENT: number;
  IA1: number;
  IA2: number;
  IA3: number;
  SEMESTER: number;
  SID: string;
  SUBID: string;
  SUBNAME: string;
}

const tableRowVal = [
  "Subject Name",
  "IA-1",
  "IA-2",
  "IA-3",
  "Assignment",
  "Final",
];

const Page = () => {
  const [loader, setLoader] = useState<boolean>(true)
  const [tableColVal, setTableColVal] = useState<Array<Array<string | number>>>(
    [[]]
  );

  useEffect(() => {
    const fetchMarks = async () => {
      const url = process.env.NEXT_PUBLIC_SERVER_URL + "/marks";

      const responce: responceType[] = await fetch(url, {
        method: "GET",
        credentials: "include",
      }).then((res) => res.json());

      setTableColVal(
        responce.map((subject) => [
          subject.SUBNAME,
          subject.IA1,
          subject.IA2,
          subject.IA3,
          subject.ASSIGNMENT,
          parseInt(`${(subject.IA1 + subject.IA2 + subject.IA3) / 3}`) + subject.ASSIGNMENT
        ])
      );
      setLoader(false)
    };

    fetchMarks();
  }, []);

  if (loader) return <Loader />

  return (
    <div>
      <Table tableRowVal={tableRowVal} tableColVal={tableColVal} />
    </div>
  );
};

export default Page;
