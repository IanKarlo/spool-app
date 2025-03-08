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
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="landing"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
      {/* <Tabs.Screen
        name="(page1)"
        options={{
          title: 'Page1',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cloud-circle' : 'close-circle-outline'} color={color} size={24} />
          ),
          headerShown: false,
        }}
      /> */}
    </Tabs>
  );
}
