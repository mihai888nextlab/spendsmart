"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Income, User } from "../types";
import getUserData from "../api/auth/getUserData";
import { usePathname, useRouter } from "next/navigation";

const UserContext = createContext({
  user: {} as User,
  loading: true,
  setLoading: (loading: boolean) => {},
  incomeData: [] as Income[],
  setIncomeData: (data: Income[]) => {},
});

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  const [incomeData, setIncomeData] = useState<Income[]>([]);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!pathname.startsWith("/dashboard")) {
      return;
    }

    let fct = async () => {
      setLoading(true);
      let userData = await getUserData();
      if (!userData) {
        router.push("/login");
        return;
      }

      setUser(JSON.parse(userData));
      setLoading(false);
    };

    fct();
  }, [pathname]);

  return (
    <UserContext.Provider
      value={{ user, loading, setLoading, incomeData, setIncomeData }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, UserContext, useUser };
