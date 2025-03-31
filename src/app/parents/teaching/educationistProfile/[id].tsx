import { router, useLocalSearchParams } from "expo-router";
import ChildProfilePage from "@/components/pages/ChildProfilePage";
import { useParents } from "@/contexts/ParentsContext";
import { useMemo } from "react";
import { Text } from "react-native";
import { useGetChildEducationistRecord } from "@/services/apiService";
import EducationistProfilePage from "@/components/pages/EducationistProfilePage";

function registerView(id: number) {
  router.push(`/parents/home/viewRegister/${id}`);
}

export default function educationistProfile() {
  const { id } = useLocalSearchParams();

  const { childEducationist, user, isLoading, error } = useParents();

  const educationist = useMemo(
    () => childEducationist?.find((educationist) => educationist.id === Number(id)),
    [childEducationist]
  );

  if (!educationist || !user) return <Text> Ops! Algo deu errado. </Text>;

  const {
    data,
    isLoading: isLoadingEducationistRecords,
    error: errorEducationistRecords,
  } = useGetChildEducationistRecord(Number(user.id), educationist.id);

  return (
    <EducationistProfilePage
      viewRegisterHistory={registerView}
      educationist={educationist}
      educationistRecords={data?.data}
      isLoading={isLoadingEducationistRecords || isLoading}
      error={errorEducationistRecords || error}
    />
  );
}
