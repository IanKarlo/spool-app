import { router, useLocalSearchParams } from "expo-router";
import ChildProfilePage from "@/components/pages/ChildProfilePage";
import { useParents } from "@/contexts/ParentsContext";
import { useMemo } from "react";
import { Text } from "react-native";
import { useGetChildTherapistRecord } from "@/services/apiService";
import TherapistProfilePage from "@/components/pages/TherapistProfilePage";

function registerView(id: number) {
  router.push(`/parents/home/viewRegister/${id}`);
}

export default function therapistsProfile() {
  const { id } = useLocalSearchParams();

  const { childTherapist, user, isLoading, error } = useParents();

  const therapists = useMemo(
    () => childTherapist?.find((therapists) => therapists.id === Number(id)),
    [childTherapist]
  );

  if (!therapists || !user) return <Text> Ops! Algo deu errado. </Text>;

  const {
    data,
    isLoading: isLoadingTherapistRecords,
    error: errorTherapistRecords,
  } = useGetChildTherapistRecord(Number(user.id), therapists.id);

  return (
    <TherapistProfilePage
      viewRegisterHistory={registerView}
      therapist={therapists}
      therapistRecords={data?.data}
      isLoading={isLoadingTherapistRecords || isLoading}
      error={errorTherapistRecords || error}
    />
  );
}
