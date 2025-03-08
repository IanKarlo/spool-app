import { PageContainer } from '@/components/atomics/PageContainer'
import { Typography } from '@/components/atomics/Typography'
import { Link } from 'expo-router'

export default function Teaching() {
  return (
    <PageContainer>
      <Typography>Teaching</Typography>
      <Typography>Teaching</Typography>
      <Typography>Teaching</Typography>
      <Typography>Teaching</Typography>
      <Typography>Teaching</Typography>
      <Link href="/parents/teaching/history">History</Link>
    </PageContainer>
  )
}