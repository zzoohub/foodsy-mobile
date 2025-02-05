import { Tabs } from "expo-router";
import { Colors } from "@/shared/constants";
import { useColorScheme } from "@/shared/hooks";
import { Entypo, FontAwesome } from "@expo/vector-icons";

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: Colors[colorScheme].tabIcon,
        tabBarActiveTintColor: Colors[colorScheme].tabIconActive,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="create-post"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <Entypo name="squared-plus" size={24} color={color} />,
          // tabBarButton: props => <TouchableOpacity {...(props as any)} onPress={() => {}} />,
        }}
      />
      <Tabs.Screen
        name="mypage"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
