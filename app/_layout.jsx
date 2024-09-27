import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { Stack } from "expo-router";
import { LogBox } from "react-native";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Regular': require('../assets/fonts/HKGrotesk-Regular.otf'),
    'Bold': require('../assets/fonts/HKGrotesk-Bold.otf'),
    'SemiBold': require('../assets/fonts/HKGrotesk-SemiBold.otf')
  });

  useEffect(() => {
    LogBox.ignoreAllLogs(true);
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="/(routes)/onboarding/index" />
        <Stack.Screen name="/(routes)/createaccount/index"/>
        <Stack.Screen name="/(routes)/checkKyc/index"/>
        {/* <Stack.Screen name="/(routes)/signIn/index" /> */}
      </Stack>
      </GestureHandlerRootView>
  );
}
