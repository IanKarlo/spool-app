import type { Colors } from '@/themes'
import type { TextProps, TextStyle } from 'react-native'
import type { DefaultTheme } from 'styled-components/native'
import styled from 'styled-components/native'


interface TypographyProps extends Omit<TextProps, 'color' | 'fontFamily' | 'style'> {
  color?: Colors
  children: React.ReactNode
  style?: Omit<TextStyle, 'color'>
}

export function Typography({ color = 'text1', children, style, ...props }: TypographyProps) {
  return (
    <StyledText
      color={color}
      style={{ ...style }}
      {...props}
    >
      {children}
    </StyledText>
  )
}

const StyledText = styled.Text<{ color: Colors }>`
  font-family: 'TTChocolates-Regular';
  font-size: 16px;
  color: ${({ color, theme }: TypographyProps & { theme: DefaultTheme }) => theme.colors[color as Colors]};
`