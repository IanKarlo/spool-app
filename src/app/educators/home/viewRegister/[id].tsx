import { Typography } from "@/components/atomics/Typography";
import ViewRegisterPage from "@/components/pages/ViewRegisterPage";
import { useEducators } from "@/contexts/EducatorsContext";
import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";

export default function ViewRegister() {
  const { id } = useLocalSearchParams();

  const { educationistRecords, educationistChildren, user, isLoading, error } =
  useEducators();

  const record = useMemo(
    () => educationistRecords?.find((record) => record.id === Number(id)),
    [educationistRecords, id]
  );

  const child = useMemo(
    () => educationistChildren?.find((child) => child.id === record?.childId),
    [educationistChildren, record]
  );

  if (!id) return null;

  if (!record || !child || !user)
    return <Typography>Ops! Parece que algo deu errado.</Typography>;

  return (
    <ViewRegisterPage
      type="educator"
      currentUser={user}
      child={{
        name: child.name,
        info: child.class,
      }}
      record={record}
      isLoading={isLoading}
      error={error}
    />
  );
}
