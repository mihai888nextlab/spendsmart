"use client";

import { useFormState, useFormStatus } from "react-dom";
import register from "../api/auth/register";

export default function Login() {
  const [error, dispatch] = useFormState(register, undefined);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="bg-gray-100 min-h-1/2 w-1/2 shadow-lg rounded-lg flex flex-col items-center px-10 py-6">
        <form
          action={dispatch}
          className="w-full h-full flex flex-col justify-between"
        >
          <h1 className="text-3xl font-semibold text-center m-0">Register</h1>
          <div>
            <label htmlFor="name" className="text-lg">
              Your name
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="border border-gray-300 rounded-lg px-2 py-1 w-full h-11 my-3"
            />
            <label htmlFor="email" className="text-lg">
              Your email
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john.doe@example.com"
              className="border border-gray-300 rounded-lg px-2 py-1 w-full h-11 my-3"
            />
            <label htmlFor="phoneNumber" className="text-lg">
              Your phone number
            </label>
            <br />
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="+234 123 456 7890"
              className="border border-gray-300 rounded-lg px-2 py-1 w-full h-11 my-3"
            />
            <label htmlFor="address" className="text-lg">
              Your address
            </label>
            <br />
            <input
              type="text"
              id="address"
              name="address"
              placeholder="123, Main Street, City"
              className="border border-gray-300 rounded-lg px-2 py-1 w-full h-11 my-3"
            />
            <label htmlFor="password" className="text-lg">
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              className="border border-gray-300 rounded-lg px-2 py-1 w-full h-11 my-3"
            />
            <label htmlFor="repPassword" className="text-lg">
              Repeat Password
            </label>
            <br />
            <input
              type="password"
              id="repPassword"
              name="repPassword"
              placeholder="********"
              className="border border-gray-300 rounded-lg px-2 py-1 w-full h-11 my-3"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          <div>
            <Button />
            <p className="text-center mt-3 text-gray-500">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Log in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

function Button() {
  const { pending } = useFormStatus();

  const handleClick = (event: any) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return (
    <>
      {!pending ? (
        <button
          aria-disabled={pending}
          type="submit"
          onClick={handleClick}
          className="bg-blue-500 text-white rounded-lg w-full h-11 my-3"
        >
          Register
        </button>
      ) : (
        <button
          aria-disabled={pending}
          type="submit"
          onClick={handleClick}
          className="bg-blue-500 text-white rounded-lg w-full h-11 my-3 flex items-center justify-center"
        >
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </button>
      )}
    </>
  );
}
