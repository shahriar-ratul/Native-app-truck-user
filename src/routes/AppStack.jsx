import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import GetRideScreen from "../screens/GetRideScreen";
import MapScreen from "../screens/MapScreen";
import InvoiceScreen from "../screens/InvoiceScreen";
import TripsScreen from "../screens/TripsScreen";

import NewParcelScreen from "../screens/NewParcelScreen";
import NewPackageScreen from "../screens/NewPackageScreen";
import PackageScreen from "../screens/PackageScreen";
import ParcelScreen from "../screens/ParcelScreen";

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
        component={PackageScreen}
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
        component={ParcelScreen}
        options={{
          title: "Parcels",
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
        component={NewParcelScreen}
        options={{
          title: "New Parcel",
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
