import { useGetChildRecord, useGetUserByToken } from "@/services/apiService";
import React, { createContext, useContext, useMemo } from "react";

type ParentsContextType = {
  user: getUserResponse["data"] | undefined;
  childRecords: any[] | undefined;
  isLoading: boolean;
  error: Error | null;
};

const ParentsContext = createContext<ParentsContextType | undefined>(undefined);

export function ParentsProvider({ children }: { children: React.ReactNode }) {
  const {
    data: getUserData,
    isLoading: isLoadingUser,
    error: errorUser,
  } =  useGetUserByToken("f57773d3");

  const {
    data: getChildRecordData,
    isLoading: isLoadingChildRecord,
    error: errorChildRecord,
  } = useGetChildRecord(1); // You'll want to make this ID dynamic based on the actual child ID

  const childRecords = useMemo(
    () => getChildRecordData && getChildRecordData.data,
    [getChildRecordData]
  );

  const user = useMemo(() => getUserData && getUserData.data, [getUserData]);

  const isLoading = useMemo(
    () => isLoadingUser || isLoadingChildRecord,
    [isLoadingUser, isLoadingChildRecord]
  );

  const error = useMemo(
    () => errorUser || errorChildRecord,
    [errorUser, errorChildRecord]
  );

  return (
    <ParentsContext.Provider
      value={{
        user,
        childRecords,
        isLoading,
        error,
      }}
    >
      {children}
    </ParentsContext.Provider>
  );
}

export function useParents() {
  const context = useContext(ParentsContext);
  if (!context) {
    throw new Error("useParents must be used within a ParentsProvider");
  }
  return context;
}
