import { Stack } from "expo-router";
import { useTheme } from "styled-components";
export default function AlertsLayout() {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.colors.white },
      }}
    />
  );
}
