import React, { FC } from "react";

interface tableColValType {
  colVal: Array<string | number>;
  reason: {
    Ename: string;
    date: string;
  };
}

interface propsType {
  tableRowVal: Array<string>;
  tableColVal: tableColValType[];
}

const CollapesibleRowTable: FC<propsType> = ({
  tableRowVal,
  tableColVal,
}): JSX.Element => {
  return (
    <table className="w-full">
      <thead className="bg-primary-color text-white sticky top-0">
        <tr className=" rounded-lg">
          {tableRowVal.map((item) => (
            <th className="text-left py-2 px-4 border" key={item}>
              {item}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className=" overflow-scroll h-full">
        {tableColVal.map((rows, index) => (
          <React.Fragment key={index}>
            <tr className="bg-white z-10">
              {rows.colVal.map((item) => (
                <td
                  key={item}
                  className="text-left py-2 px-4 border border-b-0"
                >
                  {item}
                </td>
              ))}
            </tr>
            <tr className=" bg-green-50 collapesContent">
              <td
                className="text-[0.85em] text-slate-700 text-right py-2 px-4 border border-t-0"
                colSpan={2}
              >
                For participating in
                <b> {rows.reason.Ename}</b> on <b>{rows.reason.date}</b>
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default CollapesibleRowTable;
