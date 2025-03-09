import { Tabs } from 'expo-router';
import { usePathnameColor } from '@/hooks/usePathnameColor';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from 'styled-components';
import type { Colors } from '@/themes';
export default function TabLayout() {
  const theme = useTheme();
  const { tabColor } = usePathnameColor();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarActiveTintColor: theme.colors[tabColor as Colors],
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="teaching"
        options={{
          title: 'Teaching',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'school-sharp' : 'school-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="therapy"
        options={{
          title: 'Therapy',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'pulse-sharp' : 'pulse-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
