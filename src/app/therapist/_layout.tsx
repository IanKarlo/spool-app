import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import NavBar from '@/components/molecules/NavBar'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ state, descriptors, navigation, insets }) => (
        <NavBar state={state} descriptors={descriptors} navigation={navigation} insets={insets} />
      )}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="alert"
        options={{
          title: 'Alertas',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'notifications' : 'notifications-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
