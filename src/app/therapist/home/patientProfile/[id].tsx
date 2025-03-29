import { router, useLocalSearchParams } from "expo-router";
import ChildProfilePage from "@/components/pages/ChildProfilePage";
import { useTherapist } from "@/contexts/TherapistContext";
import { useMemo } from "react";
import { Text } from "react-native";
import { useGetChildTherapistRecord } from "@/services/apiService";

function registerView(id: number) {
  router.push(`/therapist/home/viewRegister/${id}`);
}

function newRegister() {
  router.push("/therapist/home/newRegister");
}

export default function Home() {
  const { id } = useLocalSearchParams();

  const { therapistChildren, user, isLoading, error } = useTherapist();

  const child = useMemo(
    () => therapistChildren?.find((child) => child.id === Number(id)),
    [therapistChildren]
  );

  console.log(child);

  if (!child || !user) return <Text> Ops! Algo deu errado. </Text>;

  const {
    data,
    isLoading: isLoadingChildRecords,
    error: errorChildRecords,
  } = useGetChildTherapistRecord(child.id, Number(user.id));

  return (
    <ChildProfilePage
      addRegister={newRegister}
      viewRegisterHistory={registerView}
      child={child}
      childRecords={data?.data}
      isLoading={isLoadingChildRecords || isLoading}
      error={errorChildRecords || error}
    />
  );
}
