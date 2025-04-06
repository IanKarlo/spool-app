import { Button } from '@/components/atomics/Button'
import { router } from 'expo-router'
import React, { useCallback, useEffect, useState } from 'react'
import { Image, View, Alert } from 'react-native'
import { TextField } from '@/components/atomics/TextField'
import { useUser } from '@/contexts/UserContext'
import { PageContainer } from '@/components/atomics/PageContainer'
import { usePostNotificationToken } from '@/services/apiService'
const SpoolLogo = require('../../assets/images/spool-blue.png')
import { useDeviceToken } from '@/contexts/DeviceTokenContext'
import { usePushNotifications } from '@/hooks/useNotification'


export default function Index() {
  const [token, setToken] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { setUserToken, user, isLoading, error, resetUser } = useUser()
  const { mutateAsync: postNotificationToken } = usePostNotificationToken()

  const { expoPushToken } = usePushNotifications();

  const handleUserLogin = useCallback(async (user: getUserResponse["data"]) => {
    //handling device token
    if (expoPushToken) {
      // Alert.alert("Erro ao realizar o cadastro", "Por favor, tente novamente", [{ text: 'OK', onPress: () => setToken('') }])
      try {
        await postNotificationToken({
          userId: user.id,
          deviceToken: `${expoPushToken.data}`,
          userRole: user.role
        })
      } catch (error) {
        console.error(error)
      }
      // return;
    }
  
    switch (user.role) {
      case 'Child':
        router.push('./parents')
        break
      case 'Educationist':
        router.push('./educators')
        break
      case 'Therapist':
        router.push('./therapist')
        break
    }
  }, [expoPushToken])

  const onSubmit = (token: string) => {
    setSubmitted(true)
    setUserToken(token)
  }

  useEffect(() => {
    if (submitted && !isLoading) {
      setSubmitted(false)
      if (user) {
        handleUserLogin(user)
      } else {
        Alert.alert("Token inválido", "Por favor, insira um token válido", [{ text: 'OK', onPress: () => setToken('') }])
      }
    }
  }, [submitted, user, isLoading])

  useEffect(() => {
    if (error) {
      Alert.alert("Ocorreu um erro",error.message, [{ text: 'OK', onPress: resetUser }])
      setToken('')
    }
  }, [error, resetUser])

  return (
    <PageContainer error={error} >
        <View style={{ gap: 16 }}>
        <Image source={SpoolLogo} style={{ alignSelf: 'center', marginVertical: 128 }} />
        <TextField
          label="Insira seu token"
          placeholder="Digite seu token aqui"
          value={token}
          onChangeText={setToken}
        />
        <Button
          text="Entrar"
          color="blue"
          onPress={() => onSubmit(token)}
          isLoading={isLoading}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
        {__DEV__ && (
          <Button
            text="Tokens"
          color="darkBlue"
          variant='outlined'
          style={{ borderWidth: 0 }}
          onPress={() => router.push('./tokens')}
        />
      )}
      {__DEV__ && (
        <Button
          text="Components"
          color="darkBlue"
          variant='outlined'
          style={{ borderWidth: 0 }}
          onPress={() => router.push('./components')}
        />
        )}
      </View>
    </PageContainer>
  )
}
