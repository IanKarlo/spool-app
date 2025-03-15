import { PageContainer } from '@/components/atomics/PageContainer'
import Header from '@/components/molecules/Header'
import { RegisterHistory } from '@/components/organisms/History'
import { ProfileHeader } from '@/components/molecules/ProfileHeader'
import { Button } from '@/components/atomics/Button'
import { router } from 'expo-router'

function registerView() {
  router.push('/therapist/home/viewRegister')
}

export default function Home() {
  return (
    <PageContainer>
        <Header name='John Doe' profileImage='https://github.com/diego3g.png' showGoBackButton/>
        <ProfileHeader/>
        <Button text='Novo Registro' variant='outlined' color='green'></Button>
        <RegisterHistory cardFn={registerView} hideIcon={true}/>
    </PageContainer>
  )
}