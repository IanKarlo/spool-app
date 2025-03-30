import { Button } from '@/components/atomics/Button'
import { useTheme } from 'styled-components'
import { Link, router } from 'expo-router'
import React from 'react'
import { Image, View } from 'react-native'
import { TextField } from '@/components/atomics/TextField'
const SpoolLogo = require('../../assets/images/spool-blue.png')

export default function Index() {
  const theme = useTheme()
  return (
    <View style={{ flex: 1, justifyContent: 'space-between', padding: 24, gap: 24, height: '100%', position: 'relative' }}>
      <View style={{ gap: 16 }}>
        <Image source={SpoolLogo} style={{ alignSelf: 'center', marginVertical: 128 }} />
        <TextField
          label="Insira seu token"
          placeholder="Digite seu token aqui"
        />
        <Button
          text="Entrar"
          color="blue"
          onPress={() => router.push('./parents')}
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
    </View>
  )
}
