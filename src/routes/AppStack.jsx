import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import GetRideScreen from "../screens/GetRideScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Get a Ride",
          headerStyle: {
            backgroundColor: "#f3b344",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="GetRide"
        component={GetRideScreen}
        options={{
          title: "Get a Ride",
          headerStyle: {
            backgroundColor: "#f3b344",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Invoice"
        component={HomeScreen}
        options={{
          title: "Get a Ride",
          headerStyle: {
            backgroundColor: "#f3b344",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="TripHistory"
        component={HomeScreen}
        options={{
          title: "Get a Ride",
          headerStyle: {
            backgroundColor: "#f3b344",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Package"
        component={HomeScreen}
        options={{
          title: "Get a Ride",
          headerStyle: {
            backgroundColor: "#f3b344",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Parcel"
        component={HomeScreen}
        options={{
          title: "Get a Ride",
          headerStyle: {
            backgroundColor: "#f3b344",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
