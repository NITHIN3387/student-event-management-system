"use client";

import Table from "@/components/Tables/Table";
import React, { useEffect, useState } from "react";

const tableRowVal = [
  "Subject Name",
  "IA-1",
  "IA-2",
  "IA-3",
  "Assignment",
  "Final",
];

const Page = () => {
  const [tableColVal, setTableColVal] = useState<Array<Array<string | number>>>(
    [[]]
  );

  useEffect(() => {
    // api
  }, [])

  return (
    <div>
      <Table tableRowVal={tableRowVal} tableColVal={tableColVal} />
    </div>
  );
};

export default Page;
