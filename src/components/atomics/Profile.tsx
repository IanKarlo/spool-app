import { Box } from '@/components/atomics/Box'
import type { Colors } from '@/themes'
import React from 'react'
import { Image, type ImageSourcePropType } from 'react-native'
import { useTheme } from 'styled-components'

interface ProfileProps {
  size?: number
  uri: string
  color: Colors
  singleBorder?: boolean
}

export default function Profile({ size = 64, color, uri, singleBorder = false }: ProfileProps) {
  const theme = useTheme()
  const borderThickness = size/32
  return (
    <Box
      bgColor={singleBorder ? color : 'white'}
      borderRadius={size*2}
      style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: theme.colors[color as Colors],
          borderWidth: borderThickness,
          width: size+borderThickness*4,
          height: size+borderThickness*4,
        }}>
      <Image source={{ uri }} style={{ width: size, height: size, borderRadius: 200 }} />
    </Box>
  )
}
