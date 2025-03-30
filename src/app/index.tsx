import { Button } from '@/components/atomics/Button'
import { useTheme } from 'styled-components'
import { Link, router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Image, View, Alert } from 'react-native'
import { TextField } from '@/components/atomics/TextField'
import { useUser } from '@/contexts/UserContext'
import { PageContainer } from '@/components/atomics/PageContainer'
const SpoolLogo = require('../../assets/images/spool-blue.png')

export default function Index() {
  const [token, setToken] = useState('')
  const { setUserToken, user, isLoading, error, resetUser } = useUser()

  const onSubmit = (token: string) => {
    setUserToken(token)
  }

  console.log('user', user)
  console.log('error', error)
  console.log('isLoading', isLoading)

  useEffect(() => {
    if (user) {
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
    }
  }, [user])

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
