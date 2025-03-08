import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerShown: false,
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
    </Tabs>
  );
}
