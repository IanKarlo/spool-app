import { PageContainer } from '@/components/PageContainer'
import { Typography } from '@/components/Typography'
import { Link } from 'expo-router'
export default function Home() {
  return (
    <PageContainer>
      <Typography>Home</Typography>
      <Typography>Home</Typography>
      <Typography>Home</Typography>
      <Typography>Home</Typography>
      <Typography>Home</Typography>
      <Link href="/parents/home/history">History</Link>
    </PageContainer>
  )
}