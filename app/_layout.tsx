import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { AppProvider } from "@/containers";
import "react-native-reanimated";
import "@/lib/i18n";

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack screenOptions={{ 
        headerShown: false,
        contentStyle: { backgroundColor: '#000000' },
        animation: 'none',
        gestureEnabled: true,
      }}>
        {/* Onboarding Flow */}
        <Stack.Screen 
          name="onboarding" 
          options={{
            gestureEnabled: false,
            animation: 'fade',
          }}
        />
        
        {/* Main App with Orbital Navigation */}
        <Stack.Screen 
          name="(main)" 
          options={{
            gestureEnabled: false,
          }}
        />
        
        {/* Modal Screens */}
        <Stack.Screen 
          name="meal-detail" 
          options={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
          }}
        />
        
        <Stack.Screen 
          name="ai-coach" 
          options={{
            presentation: 'modal',
            animation: 'slide_from_left',
          }}
        />
        
        <Stack.Screen 
          name="profile" 
          options={{
            presentation: 'modal',
          }}
        />
        
        <Stack.Screen 
          name="challenge-detail" 
          options={{
            presentation: 'modal',
          }}
        />
      </Stack>
      <StatusBar style="light" />
    </AppProvider>
  );
}