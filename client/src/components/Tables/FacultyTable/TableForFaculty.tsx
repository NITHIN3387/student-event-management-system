import React, { FC } from "react";

interface propsType {
  tableRowVal: Array<string>;
  tableColVal: Array<Array<string | number | JSX.Element>>;
  onButtonClick: () => void;
}

const Table: FC<propsType> = ({ tableRowVal, tableColVal, onButtonClick }): JSX.Element => {
  return (
    <table className="w-full rounded-lg overflow-hidden">
      <thead className="bg-primary-color text-white">
        <tr>
          {tableRowVal.map((item, index) => (
            <th className="text-left py-2 px-2 border" key={index}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableColVal.map((rows, rowIndex) => (
          <tr className="bg-white" key={rowIndex}>
            {rows.map((item, colIndex) => (
              <td className="text-left py-2 px-4 border" key={colIndex}>
                {colIndex === rows.length - 1 ? (
                  <button onClick={onButtonClick} className="text-white bg-primary-color">
                    {item}
                  </button>
                ) : (
                  item
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
