import { PageContainer } from '@/components/atomics/PageContainer'
import { router } from 'expo-router'
import Header from '@/components/molecules/Header'
import { BigCard } from '@/components/organisms/BigCard'
import { CarousellList } from '@/components/organisms/CarousellList'
import { RegisterHistory } from '@/components/organisms/History'
import { View } from 'react-native'
import Profile from '@/components/atomics/Profile'
import { Typography } from '@/components/atomics/Typography'
import { ProfileHeader } from '@/components/molecules/ProfileHeader'

function newRegister() {
  router.push('/therapist/home/newRegister')
}

function patients() {
  router.push('/therapist/home/patients')
}

export default function Home() {
  return (
    <PageContainer>
        <Header name='John Doe' profileImage='https://github.com/diego3g.png' showGoBackButton/>
        <ProfileHeader/>
    </PageContainer>
  )
}