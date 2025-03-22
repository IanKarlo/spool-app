import type { Colors } from '@/themes'
import type {  ViewStyle } from 'react-native'
import type { DefaultTheme } from 'styled-components'
import styled from "styled-components/native"

interface BoxProps {
  bgColor: Colors
  borderRadius?: number
  style?: Omit<ViewStyle, 'backgroundColor'>
  children?: React.ReactNode
}

export function Box({ style, bgColor, borderRadius = 12, children }: BoxProps) {
  return (
    <StyledBox style={{ ...style }} bgColor={bgColor} borderRadius={borderRadius}>
      {children}
    </StyledBox>
  )
}

const StyledBox = styled.View<BoxProps>`
  border-radius: ${({ borderRadius }: BoxProps) => borderRadius}px;
  background-color: ${({ bgColor, theme }: BoxProps & { theme: DefaultTheme }) => theme.colors[bgColor as Colors]};
  /* ${({ style }: BoxProps) => style}; */
  /* box-shadow: ${({ style }: BoxProps) => style?.boxShadow}; */
`