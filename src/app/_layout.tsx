import { Stack, usePathname } from 'expo-router'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '@/themes'
import { useFonts } from 'expo-font'
import { PathnameColorProvider } from '@/hooks/usePathnameColor'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UserProvider } from '@/contexts/UserContext'

const queryClient = new QueryClient()

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'TTChocolates-Regular': require('../../assets/fonts/TT Chocolates Trial Regular.otf'),
    'TTChocolates-Medium': require('../../assets/fonts/TT Chocolates Trial Medium.otf'),
    'TTChocolates-Bold': require('../../assets/fonts/TT Chocolates Trial Bold.otf'),
  })

  const pathname = usePathname()

  console.log(pathname)

  if (!fontsLoaded) {
    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <PathnameColorProvider>
            <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: theme.colors.white } }} >
              <Stack.Screen name="components" options={{ title: 'Components', headerShown: true }} />
            </Stack>
          </PathnameColorProvider>
        </UserProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
