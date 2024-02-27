import React, { ChangeEventHandler, Dispatch, FC, SetStateAction, useState } from 'react'

interface propsType {
  label?: string;
  placeholder?: string;
  type?: string,
  value?: string,
  setValue?: Dispatch<SetStateAction<any>>;
  emptyValue?: boolean;
  setEmptyValue?: Dispatch<SetStateAction<boolean>>;
}

const InputBox: FC<propsType> = ({ label, placeholder, value, setValue, emptyValue, setEmptyValue, type }): JSX.Element => {
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if(setValue) setValue(event.target.value);
    if (setEmptyValue) setEmptyValue(false);
  };

  return (
    <div className='grid gap-1'>
      <label htmlFor={label}>{label}:</label>
      <input
        className={
          (emptyValue ? "border-red-500 text-red-500" : "border-slate-300") +
          " border rounded-md py-1 px-2"
        }
        type={type || "text"}
        id={label}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      {(emptyValue && (
        <p className="text-[0.8em] text-red-500 my-1">
          * please enter the {label}
        </p>
      )) || <p className="text-[0.8em] opacity-0 my-1">.</p>}
    </div>
  )
}

export default InputBox