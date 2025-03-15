import { PageContainer } from '@/components/atomics/PageContainer'
import { Link, router } from 'expo-router'
import Header from '@/components/molecules/Header'
import { BigCard } from '@/components/organisms/BigCard'
import { CarousellList } from '@/components/organisms/CarousellList'
import { RegisterHistory } from '@/components/organisms/History'

export default function Home() {
  return (
    <PageContainer>
        <Header name='John Doe' profileImage='https://github.com/diego3g.png' />
        <CarousellList color="green" fontColor='white' cardColor='darkGreen' cardFontcolor='white'/>
        <RegisterHistory></RegisterHistory>
    </PageContainer>
  )
}