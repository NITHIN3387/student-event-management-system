import React, { FC } from "react";

interface propsType {
  tableRowVal: Array<string>;
  tableColVal: Array<Array<string | number>>;
}

const Table: FC<propsType> = ({ tableRowVal, tableColVal }): JSX.Element => {
  return (
    <table className="w-full rounded-lg overflow-hidden">
      <thead className="bg-primary-color text-white">
        <tr>
          {tableRowVal.map((item) => (
            <th className="text-left py-2 px-4 border" key={item}>
              {item}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {tableColVal.map((rows, index) => (
          <tr className="bg-white" key={index}>
            {rows.map((item) => (
              <td key={item} className="text-left py-2 px-4 border">
                {item}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
