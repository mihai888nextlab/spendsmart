import { createContext, ReactNode } from "react";

const UserContext = createContext({});

const UserProvider = ({ children }: { children: ReactNode }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
