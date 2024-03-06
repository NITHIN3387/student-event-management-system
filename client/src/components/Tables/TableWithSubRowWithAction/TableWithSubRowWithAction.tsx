import React, { FC } from "react";

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

interface propsType {
  tableRowVal: Array<string>;
  tableColVal: tableColValType[];
  onClickUpdate: (pid: number, subid: string, count: string | number, sid: string) => void
}

const CollapesibleRowTable: FC<propsType> = ({
  tableRowVal,
  tableColVal,
  onClickUpdate
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
          <th className="text-left py-2 px-4 border">
            Action
          </th>
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
              <td className="text-left py-2 px-4 border border-b-0" rowSpan={2}>
                <button
                  className="bg-blue-500 text-white rounded-md px-2 py-1"
                  onClick={() => onClickUpdate(rows.grant.pid, rows.grant.subid, rows.colVal[3], rows.grant.sid)}
                >
                  Grant Attendence
                </button>
              </td>
            </tr>
            <tr className=" bg-green-50 collapesContent">
              <td
                className="text-[0.85em] text-slate-700 text-right py-2 px-4 border border-t-0"
                colSpan={4}
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