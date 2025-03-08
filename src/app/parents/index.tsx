import { Box } from '@/components/Box'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { PageContainer } from '@/components/PageContainer'
import { Typography } from '@/components/Typography'

export default function Index() {
  return (
      <PageContainer>
        <Box
          style={{ width: 100, height: 50, padding: 10 }}
          bgColor='blue'
        >
      </Box>
      <Icon name="home" color='blue' size={32} />
      <Typography color='black' style={{ fontSize: 24 }}  >Teste da fonte</Typography>
      <Button
        text="Press me"
        onPress={() => console.log('pressed')}
      />

      <Button
        variant="outlined"
        color="blue"
        text="Outlined Button"
        onPress={() => console.log('pressed outlined')}
      />
    </PageContainer>
  )
}
