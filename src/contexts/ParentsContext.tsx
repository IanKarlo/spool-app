import { useGetChildEducationist, useGetChildEducationistRecord, useGetChildRecord, useGetChildTherapist
  ,useGetUserByToken } from "@/services/apiService";
import type React from "react";
import { createContext, useContext, useMemo } from "react";
import { useUser } from "./UserContext";

type ParentsContextType = {
  user: getUserResponse["data"] | undefined;
  childRecords: ChildRecord[] | undefined;
  childEducationist: getChildEducationistResponse["data"] | undefined;
  childTherapist: getChildTherapistResponse["data"] | undefined;
  isLoading: boolean;
  error: Error | null;
};

const ParentsContext = createContext<ParentsContextType | undefined>(undefined);

export function ParentsProvider({ children }: { children: React.ReactNode }) {
  const { user, userId, isLoading: isLoadingUser, error: errorUser } = useUser();

  const {
    data: getChildRecordData,
    isLoading: isLoadingChildRecord,
    error: errorChildRecord,
  } = useGetChildRecord(userId);

  const {
    data: childEducationistData,
    error: errorChildEducationist,
    isLoading: isLoadingChildEducationist,
  } = useGetChildEducationist(userId);

  const {
    data: childTherapistData,
    isLoading: isLoadingChildTherapist,
    error: errorChildTherapist,
  } = useGetChildTherapist(userId);

  const childRecords = useMemo(
    () => getChildRecordData?.data,
    [getChildRecordData]
  );

  const childEducationist = useMemo(
    () => childEducationistData?.data,
    [childEducationistData]
  );

  const childTherapist = useMemo(
    () => childTherapistData?.data,
    [childTherapistData]
  );

  const isLoading = useMemo(
    () => isLoadingUser || isLoadingChildRecord || isLoadingChildEducationist || isLoadingChildTherapist,
    [isLoadingUser, isLoadingChildRecord, isLoadingChildEducationist, isLoadingChildTherapist]
  );

  const error = useMemo(
    () => errorUser || errorChildRecord || errorChildEducationist || errorChildTherapist,
    [errorUser, errorChildRecord, errorChildEducationist, errorChildTherapist]
  );

  return (
    <ParentsContext.Provider
      value={{
        user,
        childRecords,
        childTherapist,
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
