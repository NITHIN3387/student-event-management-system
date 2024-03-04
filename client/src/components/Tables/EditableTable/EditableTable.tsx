import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from "react";

interface propsType {
  tableRowVal: string[];
  tableColVal: Array<string | number>[];
  editableCols: boolean[];
  onChangeVals: Dispatch<SetStateAction<any>>[];
  onSubmit: (sid: string | number) => Promise<void>;
}

const EditableTable: FC<propsType> = ({
  tableRowVal,
  tableColVal,
  editableCols,
  onChangeVals,
  onSubmit,
}): JSX.Element => {
  const [disableInput, setDisableInput] = useState<number>(-1);

  const handleChangeEvent: (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => void = (event, index) => {
    const val = [event.target.value.length ? event.target.value : 0];
    val.forEach(onChangeVals[index]);
  };

  const onClickEdit = (index: number, rows: Array<string | number>) => {
    setDisableInput(index);
    rows.forEach((items, i) =>
      editableCols[i] ? onChangeVals[i](items) : null
    );
  };

  const onClickUpdate = (sid: string | number) => {
    setDisableInput(-1);
    onSubmit(sid);
  };

  return (
    <table className="w-full rounded-lg overflow-hidden">
      <thead className="bg-primary-color text-white">
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
            {rows.map((item, i) => (
              <td key={item} className="text-left py-2 px-4 border">
                <input
                  type="text"
                  defaultValue={item}
                  className={`w-full border ${
                    (editableCols[i] ? disableInput != index : true)
                      ? "border-transparent bg-white"
                      : "border-slate-400"
                  } rounded-sm px-1`}
                  disabled={editableCols[i] ? disableInput != index : true}
                  onChange={(event) => handleChangeEvent(event, i)}
                />
              </td>
            ))}

            <td className="text-left py-2 px-4 border">
              {disableInput != index ? (
                <button
                  className="bg-blue-500 text-white rounded-sm px-2 w-[5rem]"
                  onClick={() => onClickEdit(index, rows)}
                >
                  Edit
                </button>
              ) : (
                <button
                  className="bg-blue-500 text-white rounded-sm px-2 w-[5rem]"
                  onClick={(event) => onClickUpdate(rows[1])}
                >
                  Update
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EditableTable;
