import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import GetRideScreen from "../screens/GetRideScreen";
import MapScreen from "../screens/MapScreen";
import InvoiceScreen from "../screens/InvoiceScreen";
import TripsScreen from "../screens/TripsScreen";
import PackageScreeen from "../screens/PackageScreeen";
import NewPercelScreen from "../screens/NewPercelScreen";
import NewPackageScreen from "../screens/NewPackageScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
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
        name="MapScreen"
        component={MapScreen}
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
        name="Invoices"
        component={InvoiceScreen}
        options={{
          title: "Invoices",
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
        name="Trips"
        component={TripsScreen}
        options={{
          title: "Trips",
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
        name="Packages"
        component={PackageScreeen}
        options={{
          title: "Package",
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
        name="NewPackage"
        component={NewPackageScreen}
        options={{
          title: "New Packages",
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
        name="Parcels"
        component={PackageScreeen}
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
        name="NewParcel"
        component={NewPercelScreen}
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
