import React, { FC } from "react";

interface propsType {
  tableRowVal: Array<string>;
  tableColVal: Array<Array<string | number>>;
  onClickDelete: (sid: string | number) => Promise<void>
}

const DeletableTable: FC<propsType> = ({
  tableRowVal,
  tableColVal,
  onClickDelete
}): JSX.Element => {
  return (
    <table className="w-full rounded-lg">
      <thead className="bg-primary-color text-white sticky">
        <tr>
          {tableRowVal.map((item) => (
            <th className="text-left py-2 px-4 border" key={item}>
              {item}
            </th>
          ))}
          <th className="text-left py-2 px-4 border">Action</th>
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
            <td className="text-left py-2 px-4 border">
              <button
                className="bg-red-500 text-white rounded-sm px-2 w-[5rem]"
                onClick={() => onClickDelete(rows[1])}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DeletableTable;
