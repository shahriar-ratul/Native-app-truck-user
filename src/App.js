import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title:"Login"}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title:"Sign Up"}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"Find your Ride"}} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{title: "User Profile"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
