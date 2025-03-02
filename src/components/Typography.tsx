import type { Colors } from '@/themes'
import type { TextStyle } from 'react-native'
import type { DefaultTheme } from 'styled-components/native'
import styled from 'styled-components/native'

type Variant = 'h1' | 'h2' | 'h3' | 'body' | 'small'

interface TypographyProps {
  color?: Colors
  style?: Omit<TextStyle, 'color' 'fontFamily'>
  children: React.ReactNode
}

const variantStyles: Record<Variant, { fontSize: number; fontFamily: string }> = {
  h1: { fontSize: 32, fontFamily: 'TTChocolates-Bold' },
  h2: { fontSize: 24, fontFamily: 'TTChocolates-Bold' },
  h3: { fontSize: 20, fontFamily: 'TTChocolates-Bold' },
  body: { fontSize: 16, fontFamily: 'TTChocolates-Regular' },
  small: { fontSize: 14, fontFamily: 'TTChocolates-Regular' },
}

export function Typography({ variant = 'body', color = 'black', style, children }: TypographyProps) {
  return (
    <StyledText 
      variant={variant}
      color={color}
      style={style}
    >
      {children}
    </StyledText>
  )
}

const StyledText = styled.Text<{ variant: Variant; color: Colors }>`
  color: ${({ color, theme }) => theme.colors[color]};
  font-size: ${({ variant }) => variantStyles[variant].fontSize}px;
  font-family: ${({ variant }) => variantStyles[variant].fontFamily};
  ${({ style }) => style}
` 