import { Stack } from 'expo-router';
import { usePushNotifications } from '@/hooks/useNotification';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native'
import { theme } from '@/themes'
import { useFonts } from 'expo-font'

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'TTChocolates-Regular': require('../../assets/fonts/TT Chocolates Trial Regular.otf'),
    'TTChocolates-Bold': require('../../assets/fonts/TT Chocolates Trial Bold.otf'),
  })

  if (!fontsLoaded) {
    return null
  }

  // const { expoPushToken} = usePushNotifications();

  // useEffect(() => {
  //   if (expoPushToken) {
  //     console.log('Push token received: ', expoPushToken);
  //   }
  // }, [expoPushToken])

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
