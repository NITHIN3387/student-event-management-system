import React, {
  ChangeEventHandler,
  Dispatch,
  FC,
  SetStateAction,
} from "react";

interface propsType {
  label?: string;
  placeholder?: string;
  value?: string;
  multiple?: boolean;
  accept?: string;
  setValue?: Dispatch<SetStateAction<any>>;
  emptyValue?: boolean;
  setEmptyValue?: Dispatch<SetStateAction<boolean>>;
}

const FileInputBox: FC<propsType> = ({
  label,
  placeholder,
  value,
  accept,
  setValue,
  emptyValue,
  setEmptyValue,
  multiple,
}): JSX.Element => {
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (setValue) setValue(event.target.files);
    if (setEmptyValue) setEmptyValue(false);
  };

  return (
    <div className="grid gap-1">
      <label htmlFor={label}>{label}:</label>
      <input
        className={
          (emptyValue ? "border-red-500 text-red-500" : "border-slate-300") +
          " border rounded-md py-1 px-2"
        }
        type={"file"}
        multiple={multiple || false}
        id={label}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        accept={accept}
      />
      {(emptyValue && (
        <p className="text-[0.8em] text-red-500 my-1">
          * please enter the {label}
        </p>
      )) || <p className="text-[0.8em] opacity-0 my-1">.</p>}
    </div>
  );
};

export default FileInputBox;
