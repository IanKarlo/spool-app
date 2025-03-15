import { Button } from '@/components/atomics/Button'
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
        color="purple"
        onPress={() => router.push('./educators')}
      />
      <Button
        text="THERAPISTS"
        color="green"
        onPress={() => router.push('./therapist')}
      />
      <Button
        text="COMPONENTS"
        color="blue"
        onPress={() => router.push('./components')}
      />
    </View>
  )
}
