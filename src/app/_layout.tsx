import { Stack } from 'expo-router';
import { usePushNotifications } from '@/hooks/useNotification';
import { useEffect } from 'react';

export default function RootLayout() {
  // const { expoPushToken} = usePushNotifications();

  // useEffect(() => {
  //   if (expoPushToken) {
  //     console.log('Push token received: ', expoPushToken);
  //   }
  // }, [expoPushToken])

  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
    </Stack>
  );
}
