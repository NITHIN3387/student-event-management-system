"use client";

import Table from "@/components/Tables/Table";
import React, { FC, useEffect, useState } from "react";

interface responceType {
  CONDUCTED: number;
  PRESENT: number;
  SEMESTER: number;
  SID: string;
  SUBID: string;
  SUBNAME: string;
}

const tableRowVal = [
  "Subject Name",
  "Total Class",
  "Present",
  "Absent",
  "Percentage",
];

const Page: FC = (): JSX.Element => {
  const [tableColVal, setTableColVal] = useState<Array<Array<string | number>>>(
    [[]]
  );

  useEffect(() => {
    const fetchAttendence = async () => {
      const url = process.env.NEXT_PUBLIC_SERVER_URL + "/attendence";

      const responce: responceType[] = await fetch(url, {
        method: "GET",
        credentials: "include",
      }).then((res) => res.json());

      setTableColVal(
        responce.map((subject) => [
          subject.SUBNAME,
          subject.CONDUCTED,
          subject.PRESENT,
          subject.CONDUCTED - subject.PRESENT,
          (subject.PRESENT / subject.CONDUCTED) * 100,
        ])
      );
    };

    fetchAttendence();
  }, []);

  return <Table tableRowVal={tableRowVal} tableColVal={tableColVal} />;
};

export default Page;
