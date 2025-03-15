import { PageContainer } from '@/components/atomics/PageContainer'
import { Typography } from '@/components/atomics/Typography'
import { Link } from 'expo-router'
import Header from '@/components/molecules/Header'
export default function Alerts() {
  return (
    <PageContainer>
      <Header name='John Doe' profileImage='https://github.com/diego3g.png' />
      <Typography>Alerts</Typography>
      <Typography>Alerts</Typography>
      <Typography>Alerts</Typography>
      <Typography>Alerts</Typography>
      <Typography>Alerts</Typography>
      {/* <Link href="/therapist/alerts">History</Link> */}
    </PageContainer>
  )
}