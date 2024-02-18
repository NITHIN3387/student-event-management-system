import { FC } from "react";

const LoginForm: FC = (): JSX.Element => {
  return (
    <div className="p-10 rounded-xl w-fit bg-white">
      <header className="text-center">
        <h1 className="text-[2em] font-semibold pb-10 border-b-2">LOGIN</h1>
      </header>

      <form className="grid gap-10 pt-10">
        <div className="grid gap-3">
          <label htmlFor="userId">Register Number:</label>
          <input
            type="text"
            className="border rounded-md p-2 pl-4"
            id="userId"
            placeholder="Enter your Register Number"
          />
        </div>

        <div className="grid gap-3">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="border p-2 rounded-md pl-4"
            id="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="text-center">
          <button className="bg-primary-color text-white py-2 px-5 rounded-md">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
