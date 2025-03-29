import NewRegisterPage from '@/components/pages/NewRegisterPage'
import { useParents } from '@/contexts/ParentsContext'

export default function NewRegister() {
  const { user, isLoading, error } = useParents();
  return (
    <NewRegisterPage type="parent" currentUser={user} isLoading={isLoading} error={error}  />
  )
}
