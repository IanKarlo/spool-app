import { PageContainer } from '@/components/atomics/PageContainer'
import Header from '@/components/molecules/Header'
import { RegisterHistory } from '@/components/organisms/History'
import { ProfileHeader } from '@/components/molecules/ProfileHeader'
import { Button } from '@/components/atomics/Button'
import { router } from 'expo-router'

function registerView() {
  router.push('/therapist/home/viewRegister')
}

function newRegister() {
  router.push('/therapist/home/newRegister')
}

export default function Home() {
  return (
    <PageContainer>
        <Header name='John Doe' profileImage='https://github.com/diego3g.png' headerType = "goBack"/>
        <ProfileHeader profileColor='purple'/>
        <Button text='Novo Registro' variant='outlined' color='green' onPress={() => newRegister()} />
        <RegisterHistory cardFn={registerView} hideIcon={true}/>
    </PageContainer>
  )
}