"use client";

import { useEffect } from "react";
import { useUser } from "../Hooks/UserContext";
import DashboardHeader from "../Components/DashboardHeader";
import DashboardSidebar from "../Components/DashboardSidebar";

export default function Dashboard() {
  const user = useUser();

  useEffect(() => {}, []);

  return (
    <div>
      <DashboardHeader />

      <main className="grid w-full h-screen pt-20 grid-cols-[17.5rem_1fr] grid-rows-1">
        <DashboardSidebar />
        <div className="bg-gray-100">
          <h1>Hello, {user.user.fullName}</h1>
        </div>
      </main>
    </div>
  );
}
