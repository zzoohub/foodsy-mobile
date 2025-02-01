import { Tabs } from "expo-router";
import { Platform } from "react-native";
import { Haptic, View } from "@/shared/ui";
import { Colors } from "@/shared/constants";
import { useColorScheme } from "@/shared/hooks";
import { Entypo, FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].surface,
        headerShown: false,
        tabBarButton: Haptic,
        tabBarBackground: () => <View />,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <FontAwesome name="send" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
