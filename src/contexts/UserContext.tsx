import { useGetUserByToken } from "@/services/apiService";
import type React from "react";
import { createContext, useContext, useMemo, useState } from "react";

type UserContextType = {
  user: getUserResponse["data"] | undefined;
  isLoading: boolean;
  error: Error | null;
  setUserToken: (token: string) => void;
  userToken: string | null;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userToken, setUserToken] = useState<string | null>(null);

  const {
    data: getUserData,
    isLoading,
    error,
  } = useGetUserByToken(userToken);

  const user = useMemo(() => getUserData?.data, [getUserData]);

  const value = useMemo(
    () => ({
      user,
      isLoading,
      error,
      setUserToken,
      userToken,
    }),
    [user, isLoading, error, userToken]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
