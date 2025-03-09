import Profile from '@/components/atomics/Profile'
import { Typography } from '@/components/atomics/Typography'
import type { Colors } from '@/themes'
import React from 'react'
import { View } from 'react-native'

interface HeaderProps {
  name: string
  color: Colors
  profileImage: string
  showGoBackButton?: boolean
}

export default function Header({ name, profileImage, showGoBackButton = false, color }: HeaderProps) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View>
        <Typography>Resumo de</Typography>
        <Typography style={{ fontSize: 28, fontWeight: 'bold' }} color='pink'>{name}</Typography>
      </View>
      <Profile uri={profileImage} color={color} />
    </View>
  )
}
