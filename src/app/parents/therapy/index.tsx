import { PageContainer } from '@/components/atomics/PageContainer'
import { Typography } from '@/components/atomics/Typography'
import Header from '@/components/molecules/Header'
export default function Therapy() {
  return (
    <PageContainer>
      <Header name='John Doe' profileImage='https://github.com/diego3g.png' />
      <Typography>Therapy</Typography>
    </PageContainer>
  )
}
