import ViewRegisterPage from "@/components/pages/ViewRegisterPage";
import { useEducators } from "@/contexts/EducatorsContext";
import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";

export default function ViewRegister() {
  const { id } = useLocalSearchParams();

  if (!id) return null;

  const { educationistRecords, educationistChildren, user } = useEducators();

  const record = useMemo(
    () => educationistRecords?.find((record) => record.id === Number(id)),
    [educationistRecords, id]
  );

  const child = useMemo(
    () => educationistChildren?.find((child) => child.id === record?.childId),
    [educationistChildren, record]
  );

  if (!record || !child || !user) return null;

  return (
    <ViewRegisterPage
      type="educator"
      currentUser={user}
      child={child}
      record={record}
    />
  );
}
