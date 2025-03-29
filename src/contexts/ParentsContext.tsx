import { useGetChildRecord } from "@/services/apiService";
import React, { createContext, useContext, useMemo } from "react";

type ParentsContextType = {
  childRecords: any[] | undefined;
  isLoading: boolean;
  error: Error | null;
};

const ParentsContext = createContext<ParentsContextType | undefined>(undefined);

export function ParentsProvider({ children }: { children: React.ReactNode }) {
  const {
    data: getChildRecordData,
    isLoading,
    error,
  } = useGetChildRecord(1); // You'll want to make this ID dynamic based on the actual child ID

  const childRecords = useMemo(
    () => getChildRecordData && getChildRecordData.data,
    [getChildRecordData]
  );

  return (
    <ParentsContext.Provider
      value={{
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
