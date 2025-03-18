import { StatusBar } from "expo-status-bar";
import Providers from "./providers";
import { Stack } from "expo-router";

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
