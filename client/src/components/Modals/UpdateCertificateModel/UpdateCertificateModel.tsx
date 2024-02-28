"use client";

import FileInputBox from "@/components/FormInputs/FIleInputBox/FileInputBox";
import SearchableDropDown from "@/components/FormInputs/SearchableDropDown/SearchableDropDown";
import React, { FC, useState } from "react";

interface propType {
  pid: number
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
  pid
}): JSX.Element => {
  const [prize, setPrize] = useState("");
  const [file, setFile] = useState<File[]>([]);

  const [emptyFile, setEmptyFile] = useState<boolean>(false);
  const [emptyPrize, setEmptyPrize] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!file) {
      setEmptyFile(true)
      return
    }

    if (!prize.length) {
      setEmptyPrize(true)
      return
    }

    const URL = process.env.NEXT_PUBLIC_SERVER_URL + "/participate/update-certificate"
    const formData = new FormData()
    
    formData.append("certificate", file[0])
    formData.append("prize", prize)
    formData.append("pid", pid.toString())

    const responce = await fetch(URL, {
      method: "PUT",
      body: formData,
      credentials: "include"
    })

    if (responce.status === 200)
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
        <FileInputBox
          label="Update Certificate"
          accept='image/*'
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
