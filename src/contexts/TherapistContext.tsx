import { useUser } from '@/contexts/UserContext'
import {
  useGetTherapistChild,
  useGetTherapistRecord,
} from "@/services/apiService";
import type React from "react";
import { createContext, useContext, useMemo } from "react";

type TherapistContextType = {
  user: getUserResponse["data"] | undefined;
  therapistChildren: getTherapistChildResponse["data"] | undefined;
  therapistRecords: getTherapistRecordResponse["data"] | undefined;
  isLoading: boolean;
  error: Error | null;
};

const UserContext = createContext<TherapistContextType | undefined>(undefined);

export function TherapistProvider({ children }: { children: React.ReactNode }) {
  const { user, userId, isLoading: isLoadingUser, error: errorUser } = useUser();

  const {
    data: getTherapistChildData,
    isLoading: isLoadingTherapistChild,
    error: errorTherapistChild,
  } = useGetTherapistChild(userId);

  const {
    data: getTherapistRecordData,
    isLoading: isLoadingTherapistRecord,
    error: errorTherapistRecord,
  } = useGetTherapistRecord(userId);

  const therapistChildren = useMemo(
    () => getTherapistChildData?.data,
    [getTherapistChildData]
  );
  const therapistRecords = useMemo(
    () => getTherapistRecordData?.data,
    [getTherapistRecordData]
  );

  const isLoading = useMemo(
    () => isLoadingUser || isLoadingTherapistChild || isLoadingTherapistRecord,
    [isLoadingUser, isLoadingTherapistChild, isLoadingTherapistRecord]
  );
  const error = useMemo(
    () => errorUser || errorTherapistChild || errorTherapistRecord,
    [errorUser, errorTherapistChild, errorTherapistRecord]
  );

  return (
    <UserContext.Provider
      value={{
        user,
        therapistChildren,
        therapistRecords,
        isLoading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useTherapist() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useTherapist must be used within a TherapistProvider");
  }
  return context;
}
