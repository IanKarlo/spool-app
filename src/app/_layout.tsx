import { Stack } from 'expo-router';
import { usePushNotifications } from '@/hooks/useNotification';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native'
import { theme } from '@/themes'

export default function RootLayout() {
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
