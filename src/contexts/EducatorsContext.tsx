import {
  useGetEducationistChild,
  useGetEducationistRecord,
} from "@/services/apiService";
import type React from "react";
import { createContext, useContext, useMemo } from "react";
import { useUser } from "./UserContext";

type EducatorsContextType = {
  user: getUserResponse["data"] | undefined;
  educationistChildren: getEducationistChildResponse["data"] | undefined;
  educationistRecords: getEducationistRecordResponse["data"] | undefined;
  isLoading: boolean;
  error: Error | null;
};

const EducatorsContext = createContext<EducatorsContextType | undefined>(undefined);

export function EducatorsProvider({ children }: { children: React.ReactNode }) {
  const { user, isLoading: isLoadingUser, error: errorUser } = useUser();

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

  const educationistChildren = useMemo(
    () => getEducationistChildData?.data,
    [getEducationistChildData]
  );
  const educationistRecords = useMemo(
    () => getEducationistRecordData?.data,
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
    <EducatorsContext.Provider
      value={{
        user,
        educationistChildren,
        educationistRecords,
        isLoading,
        error,
      }}
    >
      {children}
    </EducatorsContext.Provider>
  );
}

export function useEducators() {
  const context = useContext(EducatorsContext);
  if (!context) {
    throw new Error("useEducators must be used within a EducatorsProvider");
  }
  return context;
}
