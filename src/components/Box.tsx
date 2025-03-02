import type { Colors } from '@/themes'
import type {  ViewStyle } from 'react-native'
import type { DefaultTheme } from 'styled-components'
import styled from "styled-components/native"

interface BoxProps {
  bgColor: Colors
  style?: Omit<ViewStyle, 'backgroundColor'>
  children: React.ReactNode
}

export function Box({ style, bgColor, children }: BoxProps) {
  return (
    <StyledBox style={{ ...style }} bgColor={bgColor}>
      {children}
    </StyledBox>
  )
}

const StyledBox = styled.View<BoxProps>`
  border-radius: ${({ theme }: { theme: DefaultTheme }) => theme.radius.default}px;
  background-color: ${({ bgColor, theme }: BoxProps & { theme: DefaultTheme }) => theme.colors[bgColor as Colors]};
  ${({ style }: BoxProps) => style};
`