import { PageContainer } from '@/components/atomics/PageContainer'
import { Typography } from '@/components/atomics/Typography'
import { Link } from 'expo-router'
import Header from '@/components/molecules/Header'
export default function Home() {
  return (
    <PageContainer>
      <Header name='John Doe' profileImage='https://github.com/diego3g.png' color='pink' />
      <Typography>Home</Typography>
      <Typography>Home</Typography>
      <Typography>Home</Typography>
      <Typography>Home</Typography>
      <Link href="/parents/home/history">History</Link>
    </PageContainer>
  )
}