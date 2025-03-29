import { Typography } from "@/components/atomics/Typography";
import ViewRegisterPage from "@/components/pages/ViewRegisterPage";
import { useTherapist } from "@/contexts/TherapistContext";
import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";

export default function ViewRegister() {
  const { id } = useLocalSearchParams();

  if (!id) return null;

  const { therapistChildren, therapistRecords, user, isLoading, error } =
    useTherapist();

  const record = useMemo(
    () => therapistRecords?.find((record) => record.id === Number(id)),
    [therapistRecords, id]
  );

  const child = useMemo(
    () => therapistChildren?.find((child) => child.id === record?.childId),
    [therapistChildren, record]
  );

  if (!record || !child || !user)
    return <Typography>Ops! Parece que algo deu errado.</Typography>;

  return (
    <ViewRegisterPage
      type="therapist"
      child={{
        name: child.name,
        info: child.class,
      }}
      currentUser={user}
      record={record}
      isLoading={isLoading}
      error={error}
    />
  );
}
