import { PageContainer } from '@/components/atomics/PageContainer'
import { Typography } from '@/components/atomics/Typography'
import { Link } from 'expo-router'
import Header from '@/components/molecules/Header'
export default function Teaching() {
  return (
    <PageContainer>
      <Header name='John Doe' profileImage='https://github.com/diego3g.png' />
      <Typography>Teaching</Typography>
      <Typography>Teaching</Typography>
      <Typography>Teaching</Typography>
      <Typography>Teaching</Typography>
      <Typography>Teaching</Typography>
      <Link href="/parents/teaching/history">History</Link>
    </PageContainer>
  )
}