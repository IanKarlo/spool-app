import {
  getUserByToken,
  useGetTherapistChild,
  useGetTherapistRecord,
} from "@/services/apiService";
import React, { createContext, useContext, useMemo } from "react";

type TherapistContextType = {
  user: getUserResponse["data"] | undefined;
  therapistChildren: getTherapistChildResponse["data"] | undefined;
  therapistRecords: getTherapistRecordResponse["data"] | undefined;
  isLoading: boolean;
  error: Error | null;
};

const UserContext = createContext<TherapistContextType | undefined>(undefined);

export function TherapistProvider({ children }: { children: React.ReactNode }) {
  const {
    data: getUserData,
    isLoading: isLoadingUser,
    error: errorUser,
  } = getUserByToken("392b97b6");

  const {
    data: getTherapistChildData,
    isLoading: isLoadingTherapistChild,
    error: errorTherapistChild,
  } = useGetTherapistChild(1);

  const {
    data: getTherapistRecordData,
    isLoading: isLoadingTherapistRecord,
    error: errorTherapistRecord,
  } = useGetTherapistRecord(1);

  const user = useMemo(() => getUserData && getUserData.data, [getUserData]);
  const therapistChildren = useMemo(
    () => getTherapistChildData && getTherapistChildData.data,
    [getTherapistChildData]
  );
  const therapistRecords = useMemo(
    () => getTherapistRecordData && getTherapistRecordData.data,
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
