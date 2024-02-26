"use client";

import React, {
  ChangeEventHandler,
  Dispatch,
  FC,
  FocusEventHandler,
  SetStateAction,
  useState,
} from "react";

interface propsType {
  label?: string;
  placeholder?: string;
  setValue?: Dispatch<SetStateAction<any>>;
  emptyValue?: boolean;
  setEmptyValue?: Dispatch<SetStateAction<boolean>>;
  options: {
    key: string;
    value: string;
  }[];
}

const SearchableDropDown: FC<propsType> = ({
  label,
  placeholder,
  setValue,
  emptyValue,
  setEmptyValue,
  options,
}): JSX.Element => {
  const keys = options.map((item) => item.key);

  const [Etype, setEtype] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);

  const mapOptions = () => {
    const filterOptions = options.filter((items) =>
      items.key.toLowerCase().includes(Etype.toLowerCase())
    );

    if (filterOptions.length)
      return filterOptions.map((items) => (
        <li
          key={items.value}
          className="px-3 py-1 hover:bg-[#3db166] hover:text-white rounded-sm"
          onClick={() => {
            setEtype(items.value);
            if (setValue) setValue(items.value);
            if (setEmptyValue) setEmptyValue(false);
          }}
        >
          {items.key}
        </li>
      ));
    else
      return (
        <li className="px-3 py-1 rounded-sm text-slate-500">
          No options found
        </li>
      );
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEtype(event.target.value);
    if (setEmptyValue) setEmptyValue(false);
  };

  const handleFocusOut: FocusEventHandler<HTMLInputElement> = () => {
    if (!keys.includes(Etype)) {
      setEtype("");
      if (setValue) setValue("");
    }

    setTimeout(() => setFocused(false), 200);
  };

  return (
    <div className="grid gap-1 relative">
      <label htmlFor={label}>{label}:</label>
      <input
        type="text"
        id={label}
        className={
          (emptyValue ? "border-red-500 text-red-500" : "border-slate-300") +
          " border rounded-md py-1 px-2"
        }
        value={Etype}
        placeholder={placeholder}
        onChange={handleInputChange}
        onFocus={() => setFocused(true)}
        onBlur={handleFocusOut}
        autoComplete="off"
      />
      {focused && (
        <ul className="absolute bg-slate-100 shadow-sm top-16 border rounded-md w-full max-h-[10rem] overflow-y-scroll p-1 z-10">
          {mapOptions()}
        </ul>
      )}
      {(emptyValue && (
        <p className="text-[0.8em] text-red-500 my-1">
          * please select the {label}
        </p>
      )) || <p className="text-[0.8em] opacity-0 my-1">.</p>}
    </div>
  );
};

export default SearchableDropDown;
