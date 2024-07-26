"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../types";
import getUserData from "../api/auth/getUserData";
import { usePathname, useRouter } from "next/navigation";

const UserContext = createContext({
  user: {} as User,
});

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({} as User);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let fct = async () => {
      let userData = await getUserData();
      if (!userData) {
        router.push("/login");
        return;
      }

      setUser(JSON.parse(userData));
    };

    fct();
  }, [pathname]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, UserContext, useUser };
