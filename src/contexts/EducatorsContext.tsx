import {
  getUserByToken,
  useGetEducationistChild,
  useGetEducationistRecord,
} from "@/services/apiService";
import React, { createContext, useContext, useMemo, useState } from "react";

type EducatorsContextType = {
  user: getUserResponse["data"] | undefined;
  educationistChildren: any[] | undefined;
  educationistRecords: getEducationistRecordResponse["data"] | undefined;
  isLoading: boolean;
  error: Error | null;
};

const UserContext = createContext<EducatorsContextType | undefined>(undefined);

export function EducatorsProvider({ children }: { children: React.ReactNode }) {
  const {
    data: getUserData,
    isLoading: isLoadingUser,
    error: errorUser,
  } = getUserByToken("8cf7bd59");

  const {
    data: getEducationistChildData,
    isLoading: isLoadingEducationistChild,
    error: errorEducationistChild,
  } = useGetEducationistChild(1);

  const {
    data: getEducationistRecordData,
    isLoading: isLoadingEducationistRecord,
    error: errorEducationistRecord,
  } = useGetEducationistRecord(1);

  const user = useMemo(() => getUserData && getUserData.data, [getUserData]);
  const educationistChildren = useMemo(
    () => getEducationistChildData && getEducationistChildData.data,
    [getEducationistChildData]
  );
  const educationistRecords = useMemo(
    () => getEducationistRecordData && getEducationistRecordData.data,
    [getEducationistRecordData]
  );

  const isLoading = useMemo(
    () =>
      isLoadingUser ||
      isLoadingEducationistChild ||
      isLoadingEducationistRecord,
    [isLoadingUser, isLoadingEducationistChild, isLoadingEducationistRecord]
  );
  const error = useMemo(
    () => errorUser || errorEducationistChild || errorEducationistRecord,
    [errorUser, errorEducationistChild, errorEducationistRecord]
  );

  return (
    <UserContext.Provider
      value={{
        user,
        educationistChildren,
        educationistRecords,
        isLoading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useEducators() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useEducators must be used within a EducatorsProvider");
  }
  return context;
}
