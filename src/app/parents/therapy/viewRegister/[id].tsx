import { Typography } from '@/components/atomics/Typography'
import ViewRegisterPage from '@/components/pages/ViewRegisterPage'
import { useParents } from '@/contexts/ParentsContext'
import { useLocalSearchParams } from 'expo-router'
import { useMemo } from 'react'
export default function ViewRegister() {
  const { id } = useLocalSearchParams();

  const { childRecords, user, isLoading, error } = useParents();

  const record = useMemo(
    () => childRecords?.find((record) => record.id === Number(id)),
    [childRecords, id]
  );

  if (!id) return null;

  if (!record || !user)
    return <Typography>Ops! Parece que algo deu errado.</Typography>;

  return (
    <ViewRegisterPage
      type='parent'
      currentUser={user}
      child={{
        name: user.name,
        info: 'sjhekjh',
      }}
      record={record}
      isLoading={isLoading}
      error={error}
    />
  );
}
