import { Stack, usePathname } from 'expo-router';
import { usePushNotifications } from '@/hooks/useNotification';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native'
import { theme } from '@/themes'
import { useFonts } from 'expo-font'
import { PathnameColorProvider } from '@/hooks/usePathnameColor'

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'TTChocolates-Regular': require('../../assets/fonts/TT Chocolates Trial Regular.otf'),
    'TTChocolates-Bold': require('../../assets/fonts/TT Chocolates Trial Bold.otf'),
  })

  const currentPath = usePathname();
  console.log('RootLayout currentPath',currentPath)

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
      <PathnameColorProvider>
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: theme.colors.white } }} >
          <Stack.Screen name="components" options={{ title: 'Components', headerShown: true }} />
        </Stack>
      </PathnameColorProvider>
    </ThemeProvider>
  );
}
