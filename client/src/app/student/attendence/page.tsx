"use client";

import Table from "@/components/Tables/Table";
import React, { FC, useState } from "react";

const tableRowVal = [
  "Subject Name",
  "Total Class",
  "Present",
  "Absent",
  "Percentage"
];

const Page: FC = (): JSX.Element => {
  const [tableColVal, setTableColVal] = useState<Array<Array<string | number>>>(
    [[]]
  );

  return <Table tableRowVal={tableRowVal} tableColVal={tableColVal} />;
};

export default Page;
