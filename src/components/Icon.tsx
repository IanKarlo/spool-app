import { Feather } from '@expo/vector-icons'
import type { Colors } from '@/themes'
import type { ComponentProps } from 'react'
import { useTheme } from 'styled-components/native'

interface IconProps extends Omit<ComponentProps<typeof Feather>, 'color'> {
  color?: Colors
  size?: number
}

export function Icon({ color = 'black', size = 24, ...props }: IconProps) {
  const theme = useTheme()

  return (
    <Feather
      size={size}
      color={theme.colors[color]}
      {...props}
    />
  )
}
