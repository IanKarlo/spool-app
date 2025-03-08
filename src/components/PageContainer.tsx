import { Box } from '@/components/Box'
import type { ViewStyle } from "react-native"
import type { DefaultTheme } from 'styled-components'
import styled from 'styled-components/native'
/**
 * Container for the page.
 * @param children - The children of the container.
 * @param style - The style of the container.
 * @returns The container for the page.
 */
export function PageContainer({ children, style }: { children: React.ReactNode, style?: ViewStyle }) {
  return (
    <PageContainerStyled style={{ ...style }}>
      {children}
    </PageContainerStyled>
  )
}

export const PageContainerStyled = styled.View`
  width: 100%;
  padding: ${({ theme, style }: { theme: DefaultTheme, style: ViewStyle }) => `${style.paddingVertical ?? 16}px ${style.paddingHorizontal ?? 20}px`};
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing[16]}px;
  ${({ style }: {style: ViewStyle}) => style};
`
