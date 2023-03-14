import "expo-dev-client";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, View } from "native-base";
import SignIn from "./screens/SignIn";
import { theme } from "./utils/NativeBaseTheme";
import { StatusBar as Sbar } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import store from "./redux/store";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    Black: require("./fonts/Montserrat-Black.ttf"),
    Bold: require("./fonts/Montserrat-Bold.ttf"),
    ExtraBold: require("./fonts/Montserrat-ExtraBold.ttf"),
    ExtraLight: require("./fonts/Montserrat-ExtraLight.ttf"),
    Light: require("./fonts/Montserrat-Light.ttf"),
    Medium: require("./fonts/Montserrat-Medium.ttf"),
    Regular: require("./fonts/Montserrat-Regular.ttf"),
    SemiBold: require("./fonts/Montserrat-SemiBold.ttf"),
    Thin: require("./fonts/Montserrat-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        {/** status bar for android || ios */}
        {Platform.OS == "android" ? (
          <Sbar backgroundColor="#f97316" />
        ) : (
          <StatusBar style="dark" backgroundColor="#f97316" />
        )}
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ animation: "slide_from_right" }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </NativeBaseProvider>
    </Provider>
  );
}
