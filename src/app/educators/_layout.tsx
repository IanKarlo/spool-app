import NavBar from "@/components/molecules/NavBar";
import { EducatorsProvider } from "@/contexts/EducatorsContext";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function EducatorsLayout() {
  return (
    <EducatorsProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
        tabBar={({ state, descriptors, navigation, insets }) => (
          <NavBar
            state={state}
            descriptors={descriptors}
            navigation={navigation}
            insets={insets}
          />
        )}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Início",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="alerts"
          options={{
            title: "Alertas",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "notifications-sharp" : "notifications-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
      </Tabs>
    </EducatorsProvider>
  );
}
