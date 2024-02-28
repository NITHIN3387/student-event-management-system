"use client";

import InputBox from "@/components/FormInputs/InputBox/InputBox";
import SearchableDropDown from "@/components/FormInputs/SearchableDropDown/SearchableDropDown";
import React, { FC, useState } from "react";

interface propType {
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const options = [
  { key: "1st Prize", value: "1st Prize" },
  { key: "2nd Prize", value: "2nd Prize" },
  { key: "3rd Prize", value: "3rd Prize" },
  { key: "Participation", value: "Participation" },
];

const UpdateCertificateModel: FC<propType> = ({
  setOpenModel,
}): JSX.Element => {
  const [prize, setPrize] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [emptyFile, setEmptyFile] = useState<boolean>(false);
  const [emptyPrize, setEmptyPrize] = useState<boolean>(false);

  const handleSubmit = () => {
    if (!file) {
      setEmptyFile(true)
      return
    }

    if (!prize.length) {
      setEmptyPrize(true)
      return
    }

    console.log("File:", file);
    console.log("Prize:", prize);

    setOpenModel(false);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen backdrop-blur-sm backdrop-brightness-50 flex justify-center items-center"
      id="bg"
      onClick={(event) =>
        (event.target as any).id == "bg" ? setOpenModel(false) : null
      }
    >
      <div className="bg-white p-6 rounded-md">
        <InputBox
          type="file"
          label="Update Certificate"
          setValue={setFile}
          emptyValue={emptyFile}
          setEmptyValue={setEmptyFile}
        />

        <SearchableDropDown
          options={options}
          label="Prize"
          setValue={setPrize}
          emptyValue={emptyPrize}
          setEmptyValue={setEmptyPrize}
        />
        <button
          className="bg-primary-color rounded-md py-1 px-3 text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UpdateCertificateModel;
