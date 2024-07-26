"use client";

import { use, useEffect } from "react";
import { useUser } from "../Hooks/UserContext";

export default function Dashboard() {
  const user = useUser();

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{JSON.stringify(user.user)}</p>
    </div>
  );
}
