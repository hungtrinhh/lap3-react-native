import { LogBox, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Component/Profile";
import EditProfile from "./Component/EditProfile";
import Home from "./Component/Home";
import UseEffectTest from "./Component/UseEffectTest";
import JsonFetchTest from "./Component/JsonFetchTest";
import ADD from "./Component/ADD";
const Stack = createNativeStackNavigator();
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"testJsonserver"}
      >
        <Stack.Screen name="testJsonserver" component={JsonFetchTest} />

        <Stack.Screen name="Home2" component={UseEffectTest} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ADD" component={ADD} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
