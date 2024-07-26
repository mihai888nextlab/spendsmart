"use client";

import { ReactNode } from "react";
import { UserProvider } from "./Hooks/UserContext";

export default function Providers({ children }: { children: ReactNode }) {
  return <UserProvider>{children}</UserProvider>;
}
