import Table from "@/components/Tables/Table/Table";
import React, { FC } from "react";

interface propsType {
  tableRowVal: string[];
  tableColVal: Array<string | number>[];
  setViewModel: (display: boolean) => void
}

const TableViewModle: FC<propsType> = ({ tableRowVal, tableColVal, setViewModel }): JSX.Element => {
  return (
    <div
      className="absolute h-screen w-full backdrop-blur-sm backdrop-brightness-50 top-0 left-0 flex justify-center items-center"
      id="bg"
      onClick={(event) =>
        (event.target as any).id == "bg" ? setViewModel(false) : null
      }
    >
      <div className="bg-white sm:p-10 p-5 rounded-xl flex flex-col items-center gap-3 w-[80%] h-[80%] relative">
        <Table tableRowVal={tableRowVal} tableColVal={tableColVal} />
      </div>
    </div>
  );
};

export default TableViewModle;