import { LogBox, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Component/Profile";
import EditProfile from "./Component/EditProfile";
import Home from "./Component/Home";
const Stack = createNativeStackNavigator();
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />

      <Stack.Navigator screenOptions={{ headerShown: false ,gestureEnabled:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
