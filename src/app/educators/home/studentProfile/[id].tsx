import { router, useLocalSearchParams } from "expo-router";
import ChildProfilePage from "@/components/pages/ChildProfilePage";
import { useEducators } from "@/contexts/EducatorsContext";
import { useMemo } from "react";
import { useGetChildEducationistRecord } from "@/services/apiService";
import { Text } from "react-native";

function registerView(id: number) {
  router.push(`/educators/home/viewRegister/${id}`);
}

function newRegister() {
  router.push("/educators/home/newRegister");
}

export default function StudentProfile() {
  const { id } = useLocalSearchParams();
  const { educationistChildren, user, isLoading, error } = useEducators();

  const child = useMemo(
    () => educationistChildren?.find((child) => child.id === Number(id)),
    [educationistChildren]
  );

  if (!child || !user) return <Text> Ops! Algo deu errado. </Text>;

  const {
    data,
    isLoading: isLoadingChildRecords,
    error: errorChildRecords,
  } = useGetChildEducationistRecord(child.id, Number(user.id));

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
