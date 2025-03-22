import { PageContainer } from '@/components/atomics/PageContainer'
import { Typography } from '@/components/atomics/Typography'
import { Link, router } from 'expo-router'
import Header from '@/components/molecules/Header'
import { View } from 'react-native'
import { RegisterCard } from '@/components/organisms/RegisterCard'

function cardView() {
  router.push('/therapist/alert/cardView')
}

const today = new Date()
const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1)

// fazer essa logica em um service e já puxar na pagina depois de fazer a request
const alertsByDay = [{ date: today, data: [0,1,2]}, { date: yesterday, data: [0,1]}, { date: new Date(2025, 3, 11), data: [0,1,2,3]},]

function makeCard(index: number, index2: number) {
  return <RegisterCard color='pink' fn={cardView} key={`${index}-${index2}`}/>
}

function makeDays(data: {date: Date, data: number[]}, index: number) {
  if (data.date === today) {
    return (
      <View key={index} style={{gap: 8}}>
        <Typography style={{fontSize: 20}}>Hoje</Typography>
        <View style={{gap: 12}}>
          {data.data.map((alert, index2) => makeCard(index, index2))}
        </View>
      </View>
    )
  } else if (data.date === yesterday) {
    return (
      <View key={index} style={{gap: 8}}>
        <Typography style={{fontSize: 20}}>Ontem</Typography>
        <View style={{gap: 12}}>
          {data.data.map((alert, index2) => makeCard(index, index2))}
        </View>
      </View>
    )
  } else {
    return (
      <View key={index} style={{gap: 8}}>
        <Typography style={{fontSize: 20}}>{`${data.date.getDay().toLocaleString('en-US', { minimumIntegerDigits: 2 })}/${(data.date.getMonth() + 1).toLocaleString('en-US', { minimumIntegerDigits: 2 })}/${data.date.getFullYear()}`}</Typography>
        <View style={{gap: 12}}>
          {data.data.map((alert, index2) => makeCard(index, index2))}
        </View>
      </View>
    )
  }
}

export default function Alerts() {
  return (
    <PageContainer>
      <Header name='Alertas' subtitle1='Seus' profileImage='https://github.com/diego3g.png' />
      <View style={{gap: 12}}>
        {alertsByDay.map((data, index) => makeDays(data, index))}
      </View>
    </PageContainer>
  )
}