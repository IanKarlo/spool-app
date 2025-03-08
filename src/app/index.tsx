import { Button } from '@/components/Button'
import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 24 }}>
      <Button
        text="PARENTS"
        onPress={() => router.push('./parents')}
      />
      <Button
        text="EDUCATORS"
        color="green"
        onPress={() => router.push('./educators')}
      />
      <Button
        text="THERAPISTS"
        color="blue"
        onPress={() => router.push('./therapists')}
      />
      <Button
        text="COMPONENTS"
        color="purple"
        onPress={() => router.push('./components')}
      />
    </View>
  )
}
