import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import Providers from "./providers";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <Providers>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar style="auto" />
    </Providers>
  );
}
