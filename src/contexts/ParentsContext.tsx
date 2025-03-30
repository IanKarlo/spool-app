import { useGetChildEducationist, useGetChildRecord, useGetUserByToken } from "@/services/apiService";
import type React from "react";
import { createContext, useContext, useMemo } from "react";
import { useUser } from "./UserContext";

type ParentsContextType = {
  user: getUserResponse["data"] | undefined;
  childRecords: ChildRecord[] | undefined;
  childEducationist: getChildEducationistResponse["data"] | undefined;
  isLoading: boolean;
  error: Error | null;
};

const ParentsContext = createContext<ParentsContextType | undefined>(undefined);

export function ParentsProvider({ children }: { children: React.ReactNode }) {
  const { user, isLoading: isLoadingUser, error: errorUser } = useUser();

  const {
    data: getChildRecordData,
    isLoading: isLoadingChildRecord,
    error: errorChildRecord,
  } = useGetChildRecord(1); // You'll want to make this ID dynamic based on the actual child ID

  const {
    data: childEducationistData,
    error: errorChildEducationist,
    isLoading: isLoadingChildEducationist,
  } = useGetChildEducationist(1);

  const childRecords = useMemo(
    () => getChildRecordData?.data,
    [getChildRecordData]
  );

  const childEducationist = useMemo(
    () => childEducationistData?.data,
    [childEducationistData]
  );

  const isLoading = useMemo(
    () => isLoadingUser || isLoadingChildRecord || isLoadingChildEducationist,
    [isLoadingUser, isLoadingChildRecord, isLoadingChildEducationist]
  );

  const error = useMemo(
    () => errorUser || errorChildRecord || errorChildEducationist,
    [errorUser, errorChildRecord, errorChildEducationist]
  );

  return (
    <ParentsContext.Provider
      value={{
        user,
        childRecords,
        childEducationist,
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
