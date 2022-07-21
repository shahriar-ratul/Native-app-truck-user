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


import userLocationStore from "../store/UserLocation";

import Header from "../components/Header";
import { Avatar, Card, IconButton } from "react-native-paper";

export default function HomeScreen({ navigation }) {

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
        <ScrollView style={{backgroundColor:'#ffffff'}}>
        <View style={tw`pb-4 mx-auto`}>
          <Image
            source={require("./../assets/images/logo.png")}
            style={{ width: 300, height: 100 }}
          />
        </View>
        
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <TouchableOpacity     
             key={index} onPress={() => navigation.navigate(item.screen)}>
                 <Card.Title
                  style={tw`text-center text-2xl p-4 pl-4  mb-4 bg-white rounded-lg`}
                  title={item.title}
                  subtitle={item.subtitle}
                  left={(props) => <Avatar.Icon {...props} icon={item.icon}/>}
                  right={(props) => <IconButton {...props} icon="arrow-right-bold-circle" onPress={() => {}} />}
                />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

    </>
  );
}
