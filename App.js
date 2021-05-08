import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/router";

const App = () => {
  return (
    <NavigationContainer>
      <Router />
      <StatusBar />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
