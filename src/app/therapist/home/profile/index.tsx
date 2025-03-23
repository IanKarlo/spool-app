import { PageContainer } from '@/components/atomics/PageContainer'
import Header from '@/components/molecules/Header'
import { RegisterHistory } from '@/components/organisms/History'
import { ProfileHeader } from '@/components/molecules/ProfileHeader'
import { Button } from '@/components/atomics/Button'
import { router } from 'expo-router'
import { View } from 'react-native'

function registerView() {
  router.push('/therapist/home/viewRegister')
}

function newRegister() {
  router.push('/therapist/home/newRegister')
}

export default function Home() {
  return (
    <PageContainer style={{gap: 32}}>
        <View style={{gap: 16}}>
          <Header name='John Doe' profileImage='https://github.com/diego3g.png' headerType = "goBack"/>
          <ProfileHeader profileColor='darkBlue'/>
          <Button 
            textWeight='bold'
            text='Novo Registro'
            variant='outlined'
            color='blue'
            onPress={() => newRegister()}
            style={{ width: 'auto', alignSelf: 'center' }}
            rightIcon="plus"
          />
        </View>
        <RegisterHistory cardFn={registerView} hideIcon={true}/>
    </PageContainer>
  )
}