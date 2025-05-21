import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-reanimated";
import AppNavigator from "../src/navigation/AppNavigator";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <>
      <AppNavigator />
      <StatusBar style="auto" />
    </>
  );
}
