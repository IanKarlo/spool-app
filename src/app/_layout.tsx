import { Stack, usePathname } from 'expo-router'
import { usePushNotifications } from '@/hooks/useNotification'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '@/themes'
import { useFonts } from 'expo-font'
import { PathnameColorProvider } from '@/hooks/usePathnameColor'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'TTChocolates-Regular': require('../../assets/fonts/TT Chocolates Trial Regular.otf'),
    'TTChocolates-Medium': require('../../assets/fonts/TT Chocolates Trial Medium.otf'),
    'TTChocolates-Bold': require('../../assets/fonts/TT Chocolates Trial Bold.otf'),
  })

  const pathname = usePathname()

  console.log(pathname)

  // const { expoPushToken} = usePushNotifications();

  // useEffect(() => {
  //   if (expoPushToken) {
  //     console.log('Push token received: ', expoPushToken);
  //   }
  // }, [expoPushToken])

  if (!fontsLoaded) {
    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <PathnameColorProvider>
          <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: theme.colors.white } }} >
            <Stack.Screen name="components" options={{ title: 'Components', headerShown: true }} />
          </Stack>
        </PathnameColorProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
