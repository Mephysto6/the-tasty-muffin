import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles, colours } from "../../global" ;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{

        tabBarActiveTintColor: colours["blue"],

        headerStyle: {
          backgroundColor: colours["specgrey"],
        },
        headerShadowVisible: false,
        headerTintColor: colours["white"],

        tabBarStyle: {
          backgroundColor: colours["specgrey"],
        },
        
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
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'search' : 'search-outline'} color={color} size={24} />
          ),
        }} />
    </Tabs>
  );
}
