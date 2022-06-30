import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import Loading from "../components/Loading";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAP_API_KEY } from "@env";
import userLocationStore from "../store/UserLocation";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { Avatar, Card, IconButton } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  const startLocation = userLocationStore((state) => state.startLocation);
  const storeStartLocation = userLocationStore(
    (state) => state.setStartLocation
  );
  const storeEndLocation = userLocationStore((state) => state.setEndLocation);
  const setDescription = userLocationStore(
    (state) => state.setStartDescription
  );
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./../assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  const data = [
    {
      id: "1",
      title: "Book a New Trip",
      subtitle: "Book a trucks to your destination",
      icon: 'truck',
      screen: "MapScreen",
    }, 
    {
      id: "6",
      title: "New Parcels",
      subtitle: "Send your parcels to your customers",
      icon: 'truck-cargo-container',
      screen: "NewPackage",
    },
    {
      id: "7",
      title: "New Packages",
      subtitle: "Send your packages to your customers",
      icon: 'truck-cargo-container',
      screen: "NewPackage",
    },
    {
      id: "2",
      title: "Trips",
      subtitle: "View all your trips",
      icon: 'truck-check',
      screen: "Trips",
    }, 
    {
      id: "3",
      title: "Invoices",
      subtitle: "View all your invoices",
      icon: 'truck',
      screen: "Invoices",
    },
    {
      id: "4",
      title: "Parcels",
      subtitle: "View all your parcels",
      icon: 'truck-fast',
      screen: "Parcels",
    },
    {
      id: "5",
      title: "Packages",
      subtitle: "View all your packages",
      icon: 'truck-cargo-container',
      screen: "Packages",
    },
  ];

  return (
    <>
      <Header />
      <View style={{ flex: 1 }}>
        <ScrollView>
        <View style={tw`pb-4 mx-auto`}>
          <Image
            source={require("./../assets/images/logo.png")}
            style={{ width: 300, height: 100 }}
          />
        </View>
        
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <TouchableOpacity  key={index} onPress={() => navigation.navigate(item.screen)}>
                 <Card.Title
                  style={tw`text-center text-2xl p-2 mb-4 border border-black  bg-yellow-100 rounded-lg`}
                  title={item.title}
                  subtitle={item.subtitle}
                  left={(props) => <Avatar.Icon {...props} icon={item.icon} />}
                  right={(props) => <IconButton {...props} icon="arrow-right-bold-circle" onPress={() => {}} />}
                />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

    </>
  );
}
