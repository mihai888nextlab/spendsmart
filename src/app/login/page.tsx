"use client";

import { useFormState } from "react-dom";
import login from "../api/auth/login";

export default function Login() {
  const [error, dispatch] = useFormState(login, undefined);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="bg-gray-100 h-1/2 w-1/2 shadow-lg rounded-lg flex flex-col items-center px-10 py-6">
        <form
          action={dispatch}
          className="w-full h-full flex flex-col justify-between"
        >
          <h1 className="text-3xl font-semibold text-center m-0">
            Log in to your account
          </h1>
          <div>
            <label htmlFor="email" className="text-lg">
              Your email
            </label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="john.doe@example.com"
              className="border border-gray-300 rounded-lg px-2 py-1 w-full h-11 my-3"
            />
            <label htmlFor="email" className="text-lg">
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              placeholder="********"
              className="border border-gray-300 rounded-lg px-2 py-1 w-full h-11 my-3"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          <div>
            <button className="bg-blue-500 text-white rounded-lg w-full h-11 my-3">
              Log in
            </button>
            <p className="text-center mt-3 text-gray-500">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
