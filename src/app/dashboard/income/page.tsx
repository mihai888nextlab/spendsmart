"use client";

import { getIncomes } from "@/app/api/income/income";
import DashboardHeader from "@/app/Components/DashboardHeader";
import DashboardSidebar from "@/app/Components/DashboardSidebar";
import AddIncomeModal from "@/app/Components/Modals/AddIncomeModal";
import { useUser } from "@/app/Hooks/UserContext";
import { use, useEffect, useState } from "react";

export default function Income() {
  const user = useUser();

  const [showModal, setShowModal] = useState("");

  useEffect(() => {
    console.log(user.user);
    if (!user.user._id) {
      return;
    }

    let fct = async () => {
      user.setLoading(true);
      let incomeData = await getIncomes(user.user._id);
      console.log(incomeData);

      if (incomeData == null) {
        return;
      }

      user.setIncomeData(incomeData);
      user.setLoading(false);
    };

    fct();
  }, [user.user]);

  return (
    <div>
      {showModal === "addIncome" && (
        <AddIncomeModal onClose={() => setShowModal("")} />
      )}

      <DashboardHeader />

      <main className="grid w-full h-screen pt-20 grid-cols-[17.5rem_1fr] grid-rows-1">
        <DashboardSidebar />
        <div className="bg-gray-100 p-6">
          <div className="rounded w-full shadow-lg bg-white p-5">
            <h1 className="font-semibold m-0 mb-5 text-2xl">Income sources</h1>

            <div className="block items-center sm:flex mb-5">
              <form className="mb-4 sm:mb-0 sm:pr-3" action="#" method="GET">
                <label
                  className="text-sm font-medium text-gray-900 sr-only"
                  htmlFor="products-search"
                >
                  Search
                </label>
                <div className="relative mt-1 lg:w-64 xl:w-96">
                  <div className="flex">
                    <div className="relative w-full">
                      <input
                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                        id="products-search"
                        name="products-search"
                        placeholder="Search for products"
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div className="hidden space-x-1 border-l border-gray-100 pl-2 md:flex">
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                >
                  <span className="sr-only">Configure</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    className="text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                >
                  <span className="sr-only">Delete</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    className="text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                >
                  <span className="sr-only">Purge</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    className="text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                >
                  <span className="sr-only">Settings</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    className="text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                  </svg>
                </a>
              </div>
              <div className="flex w-full items-center sm:justify-end">
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 focus:!ring-2 p-0 font-medium rounded-lg"
                  type="button"
                  onClick={() => setShowModal("addIncome")}
                >
                  <span className="flex items-center rounded-md text-sm px-3 py-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="mr-3 text-sm"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                    </svg>
                    Add income source
                  </span>
                </button>
              </div>
            </div>

            <table className="w-full text-left text-sm text-gray-500 min-w-full divide-y divide-gray-200">
              <thead className="text-xs uppercase text-gray-700 bg-gray-100">
                <tr>
                  <th className="px-6 py-3">
                    <span className="sr-only">Toggle selected</span>
                    <input
                      className="h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500"
                      type="checkbox"
                    />
                  </th>
                  <th className="px-6 py-3">Source</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Date received</th>
                  <th className="px-6 py-3">Frequency</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {user.incomeData.map((income, i) => (
                  <tr
                    data-testid="table-row-element"
                    className="hover:bg-gray-100"
                    key={i}
                  >
                    <td className="px-6 py-4 w-4 p-4">
                      <input
                        className="h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500"
                        type="checkbox"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap p-4 text-sm font-normal text-gray-500">
                      <div className="text-base font-semibold text-gray-900">
                        {income.source}
                      </div>
                      <div className="text-sm font-normal text-gray-500">
                        {income.uid}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-medium text-gray-900">
                      {income.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-medium text-gray-900">
                      {income.date_received.toString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-medium text-gray-900">
                      {income.frequency}
                    </td>
                    <td className="px-6 py-4 space-x-2 whitespace-nowrap p-4">
                      <div className="flex items-center gap-x-3">
                        <button
                          className="text-white
                bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 focus:!ring-2 
                p-0 font-medium rounded-lg"
                          type="button"
                        >
                          <span className="flex items-center rounded-md text-sm px-3 py-2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 20 20"
                              className="mr-2 text-lg"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                              <path
                                fillRule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            Edit item
                          </span>
                        </button>
                        <button
                          className="text-white bg-red-700 border border-transparent hover:bg-red-800 
                 focus:ring-red-300 disabled:hover:bg-red-800
                  focus:!ring-2 p-0 font-medium rounded-lg"
                          type="button"
                        >
                          <span className="flex items-center rounded-md text-sm px-3 py-2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 20 20"
                              className="mr-2 text-lg"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            Delete item
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
