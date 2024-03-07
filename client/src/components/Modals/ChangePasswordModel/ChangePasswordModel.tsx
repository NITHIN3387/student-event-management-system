"use client";

import FileInputBox from "@/components/FormInputs/FIleInputBox/FileInputBox";
import SearchableDropDown from "@/components/FormInputs/SearchableDropDown/SearchableDropDown";
import React, { ChangeEventHandler, FC, FormEventHandler, useState } from "react";

interface propType {
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangePasswordModel: FC<propType> = ({
  setOpenModel,
}): JSX.Element => {
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");

  const [emptyPassword, setEmptyPassword] = useState<boolean>(false);
  const [WrongPassword, setWrongPassword] = useState<boolean>(false);
  const [emptyNewPassword, setEmptyNewPassword] = useState<boolean>(false);

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPassword(event.target.value);

    if (emptyPassword) setEmptyPassword(false);
    if (WrongPassword) setWrongPassword(false);
  };

  const handleNewPasswordChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setNewPassword(event.target.value);

    if (emptyNewPassword) setEmptyPassword(false);
  };

  const handleChangePassword: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    if (!password.length) {
      setEmptyPassword(true)
      return
    }

    if (!newPassword.length) {
      setEmptyNewPassword(true)
      return
    }

    const URL = process.env.NEXT_PUBLIC_SERVER_URL + "/auth/change-password"

    const responce = await fetch(URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ oldPassword: password, newPassword: newPassword }),
      credentials: "include"
    })

    if (responce.status === 401) {
      setWrongPassword(true)
      return
    }

    if (responce.status === 200)
      setOpenModel(false);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen backdrop-blur-sm backdrop-brightness-50 flex justify-center items-center z-10"
      id="bg"
      onClick={(event) =>
        (event.target as any).id == "bg" ? setOpenModel(false) : null
      }
    >
      <div className="bg-white p-6 rounded-md">
      <form className="grid gap-3 lg:pt-10 pt-7" onSubmit={handleChangePassword}>
        <div className="grid gap-3">
          <label htmlFor="password">Old Password:</label>

          <input
            type="text"
            className={
              (emptyPassword || WrongPassword
                ? "border-red-500 text-red-500"
                : "") + " border p-2 rounded-md pl-4 sm:w-[350px] w-[275px]"
            }
            id="password"
            placeholder="Enter your old Password"
            onChange={handlePasswordChange}
          />

          {!emptyPassword && !WrongPassword && (
            <p className="text-[0.8em] opacity-0">.</p>
          )}
          {emptyPassword && (
            <p className="text-[0.8em] text-red-500">
              * please enter your old Password
            </p>
          )}
          {WrongPassword && (
            <p className="text-[0.8em] text-red-500">
              * Wrong password
            </p>
          )}
        </div>

        <div className="grid gap-3">
          <label htmlFor="new-password">New Password:</label>

          <div className="flex relative items-center">
            <input
              type="text"
              className={
                (emptyNewPassword
                  ? "border-red-500 text-red-500"
                  : "") + " border p-2 rounded-md pl-4 sm:w-[350px] w-[275px]"
              }
              id="new-password"
              placeholder="Enter the new password"
              onChange={handleNewPasswordChange}
            />
          </div>

          {!emptyNewPassword && (
            <p className="text-[0.8em] opacity-0">.</p>
          )}
          {emptyNewPassword && (
            <p className="text-[0.8em] text-red-500">
              * please enter the new password
            </p>
          )}
        </div>

        <div className="text-center">
          <button
            className="bg-primary-color text-white py-2 px-5 rounded-md"
            type="submit"
          >
            Change Password
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default ChangePasswordModel;