'use client'

import HidePassword from "@/assets/icons/HidePassword";
import ShowPassword from "@/assets/icons/ShowPassword";
import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";

const LoginForm: FC = (): JSX.Element => {
  // variables to store the inputs given by the user in Login form
  const [registerNumber, setRegisterNumber] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  //variable to indicate the visible status of the password
  const [showPassword, setShowPassword] = useState<boolean>(false)

  // variables to indicate the error status in login form
  const [emptyRegisterNumber, setEmptyRegisterNumber] = useState<boolean>(false)
  const [emptyPassword, setEmptyPassword] = useState<boolean>(false)
  const [invalidRegisterNumber, setInvalidRegisterNumber] = useState<boolean>(false)
  const [incorrectPassword, setIncorrectPassword] = useState<boolean>(false)

  /*
    funtion to read the input given by the user in register Number input box
    params:
      event: which contains change event of the Register Number input box
    return:
      void
  */
  const handleRegisterNumberChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setRegisterNumber(event.target.value)       //assigning the current Register Number input box value to variable

    // setting error status to false if it is in true condition
    if (emptyRegisterNumber) setEmptyRegisterNumber(false)
    if (invalidRegisterNumber) setInvalidRegisterNumber(false)
  }

  /*
    funtion to read the input given by the user in Password input box
    params:
      event: which contains change event of the Password input box
    return:
      void
  */
  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value)          //assigning the current Register Number input box value to variable

    // setting error status to false if it is in true condition
    if (emptyPassword) setEmptyPassword(false)
    if (incorrectPassword) setIncorrectPassword(false)
  }

  /*
    funtion to handle the login of the user 
    params:
      event: which contains form event of the login form
    return:
      void
  */
  const handleLogin: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    //checking whether the RegisterNumber and passwords are empty or not
    if (registerNumber === "") setEmptyRegisterNumber(true)
    else if (password === "") setEmptyPassword(true)
    else {
      // write api login here
    }
  }


  return (
    <div className="lg:p-10 p-7 rounded-xl w-fit bg-white z-20">
      <header className="text-center">
        <h1 className="text-[2em] font-semibold lg:pb-10 pb-7 border-b-2">LOGIN</h1>
      </header>

      <form className="grid gap-3 lg:pt-10 pt-7" onSubmit={handleLogin}>
        <div className="grid gap-3">
          <label htmlFor="userId">Register Number:</label>

          <input
            type="text"
            className={
              (emptyRegisterNumber || invalidRegisterNumber ?
                "border-red-500 text-red-500" : "") + " border p-2 rounded-md pl-4 sm:w-[350px] w-[250px]"
            }
            id="userId"
            placeholder="Enter your Register Number"
            onChange={handleRegisterNumberChange}
          />

          {(!emptyRegisterNumber && !invalidRegisterNumber) && <p className="text-[0.8em] opacity-0">.</p>}
          {emptyRegisterNumber && <p className="text-[0.8em] text-red-500">* please enter your Register Number</p>}
          {invalidRegisterNumber && <p className="text-[0.8em] text-red-500">* Invalid Register Number</p>}
        </div>

        <div className="grid gap-3">
          <label htmlFor="password">Password:</label>

          <div className="flex relative items-center">
            <input
              type={showPassword ? "text" : "password"}
              className={
                (emptyPassword || incorrectPassword ?
                  "border-red-500 text-red-500" : "") + " border p-2 rounded-md pl-4 sm:w-[350px] w-[250px]"
              }
              id="password"
              placeholder="Enter the password"
              onChange={handlePasswordChange}
            />

            <button type="button" className="absolute right-0" onClick={(event) => setShowPassword((pre) => !pre)}>
              {showPassword ? <HidePassword className="scale-75 bg-white"/> : <ShowPassword className="scale-75 bg-white"/>}
            </button>
          </div>
          
          {(!emptyPassword && !incorrectPassword) && <p className="text-[0.8em] opacity-0">.</p>}
          {emptyPassword && <p className="text-[0.8em] text-red-500">* please enter the password</p>}
          {incorrectPassword && <p className="text-[0.8em] text-red-500">* Incorrect password</p>}
        </div>

        <div className="text-center">
          <button className="bg-primary-color text-white py-2 px-5 rounded-md" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
