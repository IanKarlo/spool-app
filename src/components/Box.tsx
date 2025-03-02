import type { Colors } from '@/themes'
import type { ViewStyle } from 'react-native'
import type { DefaultTheme } from 'styled-components'
import styled from "styled-components/native"

interface BoxProps {
  backgroundColor: Colors
  style?: Omit<ViewStyle, 'backgroundColor'>
  children: React.ReactNode
}

export function Box({ style, backgroundColor, children }: BoxProps) {
  return (
    <StyledBox style={style} backgroundColor={backgroundColor}>
      {children}
    </StyledBox>
  )
}

const StyledBox = styled.View`
  border-radius: ${({ theme }: BoxProps & { theme: DefaultTheme }) => theme.radius.default}px;
  background-color: ${({ backgroundColor, theme }: BoxProps & { theme: DefaultTheme }) => theme.colors[backgroundColor]};
  ${({ style }: BoxProps) => style}
`