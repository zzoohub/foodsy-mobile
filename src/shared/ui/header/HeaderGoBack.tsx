import { Colors } from "@/shared/constants";
import { useColorScheme } from "@/shared/hooks";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

export const HeaderGoBack = () => {
  const router = useRouter();
  const theme = useColorScheme();

  return (
    <Pressable onPress={() => router.back()}>
      <Entypo name="chevron-left" size={24} color={Colors[theme].onBackground} />
    </Pressable>
  );
};
