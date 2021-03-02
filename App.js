// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./components/Navigation";

export default function App() {
  return (
    // <>
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
    // </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
