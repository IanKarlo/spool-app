import type { Colors } from '@/themes'
import type { TextStyle } from 'react-native'
import type { DefaultTheme } from 'styled-components/native'
import styled from 'styled-components/native'


interface TypographyProps {
  color?: Colors
  style?: Omit<TextStyle, 'color' | 'fontFamily'>
  children: React.ReactNode
}

export function Typography({ color = 'black', style, children }: TypographyProps) {
  return (
    <StyledText
      color={color}
      style={style}
    >
      {children}
    </StyledText>
  )
}

const StyledText = styled.Text<{ color: Colors }>`
  font-family: 'TTChocolates-Regular';
  color: ${({ color, theme }: TypographyProps & { theme: DefaultTheme }) => theme.colors[color as Colors]};
  ${({ style }: TypographyProps) => style}
`