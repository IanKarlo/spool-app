import { Box } from '@/components/Box'
import type { ViewStyle } from "react-native"
import { useTheme } from 'styled-components'

export function PageContainer({ children, style }: { children: React.ReactNode, style?: ViewStyle }) {
  const theme = useTheme()
  return (
    <Box bgColor="white" style={{ paddingTop: theme.spacing[16], paddingHorizontal: theme.spacing[20], gap: theme.spacing[16], ...style }}>
      {children}
    </Box>
  )
}

