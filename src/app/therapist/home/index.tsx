import { PageContainer } from '@/components/atomics/PageContainer'
import { router } from 'expo-router'
import Header from '@/components/molecules/Header'
import { BigCard } from '@/components/organisms/BigCard'
import { CarousellList } from '@/components/organisms/CarousellList'
import { RegisterHistory } from '@/components/organisms/History'

function newRegister() {
  router.push('/therapist/home/newRegister')
}

function patients() {
  router.push('/therapist/home/patients')
}

function profile() {
  router.push('/therapist/home/profile')
}

export default function Home() {
  return (
    <PageContainer>
        <Header name='John Doe' profileImage='https://github.com/diego3g.png' />
        <BigCard color='purple' fontColor='white' fn={newRegister}/>
        <CarousellList crFn={patients} cardFn={profile} color="green" fontColor='white' cardColor='darkGreen' cardFontcolor='white'/>
        <RegisterHistory></RegisterHistory>
    </PageContainer>
  )
}