import { useGetUserByToken } from "@/services/apiService";
import { useQueryClient } from '@tanstack/react-query'
import type React from "react";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

type UserContextType = {
  user: getUserResponse["data"] | undefined;
  resetUser: () => void;
  userId: number | null;
  isLoading: boolean;
  error: Error | null;
  setUserToken: (token: string) => void;
  userToken: string | null;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient()
  const [userToken, setUserToken] = useState<string | null>(null);

  const {
    data: getUserData,
    isLoading,
    error,
  } = useGetUserByToken(userToken);

  const resetUser = useCallback(() => {
    queryClient.setQueryData(['getUserByToken', userToken], null)
    setUserToken(null)
  }, [queryClient, userToken])

  const user = useMemo(() => getUserData?.data, [getUserData]);

  const value = useMemo(
    () => ({
      user,
      userId: user?.id ?? null,
      isLoading,
      error,
      setUserToken,
      userToken,
      resetUser,
    }),
    [user, isLoading, error, userToken, resetUser]
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
