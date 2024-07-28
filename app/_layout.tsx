import { router, Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Keep the splash screen visible while fetch resources
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  let [fontsLoaded, fontError] = useFonts({
    MulishBlack: require("../assets/fonts/Mulish-Black.ttf"),
    MulishBlackItalic: require("../assets/fonts/Mulish-BlackItalic.ttf"),
    MulishBold: require("../assets/fonts/Mulish-Bold.ttf"),
    MulishBoldItalic: require("../assets/fonts/Mulish-BoldItalic.ttf"),
    MulishExtraBold: require("../assets/fonts/Mulish-ExtraBold.ttf"),
    MulishExtraBoldItalic: require("../assets/fonts/Mulish-ExtraBoldItalic.ttf"),
    MulishExtraLight: require("../assets/fonts/Mulish-ExtraLight.ttf"),
    MulishExtraLightItalic: require("../assets/fonts/Mulish-ExtraLightItalic.ttf"),
    MulishItalic: require("../assets/fonts/Mulish-Italic.ttf"),
    MulishLight: require("../assets/fonts/Mulish-Light.ttf"),
    MulishLightItalic: require("../assets/fonts/Mulish-LightItalic.ttf"),
    MulishMedium: require("../assets/fonts/Mulish-Medium.ttf"),
    MulishMediumItalic: require("../assets/fonts/Mulish-MediumItalic.ttf"),
    MulishRegular: require("../assets/fonts/Mulish-Regular.ttf"),
    MulishSemiBold: require("../assets/fonts/Mulish-SemiBold.ttf"),
    MulishSemiBoldItalic: require("../assets/fonts/Mulish-SemiBoldItalic.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      // After fonts are loaded, wait for 1 seconds before setting the app as ready
      setTimeout(() => {
        setAppIsReady(true);
      }, 1000);
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (appIsReady) {
      // When the app is ready, hide the splash screen
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Stack />;
};

export default RootLayout;
