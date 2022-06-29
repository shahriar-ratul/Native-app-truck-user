import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import Loading from "../components/Loading";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAP_API_KEY} from '@env'
import userLocationStore from "../store/UserLocation";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

export default function HomeScreen({ navigation }) {
  const startLocation = userLocationStore((state)=> state.startLocation);
  const storeStartLocation = userLocationStore((state)=> state.setStartLocation);
  const storeEndLocation = userLocationStore((state)=> state.setEndLocation);
  const setDescription = userLocationStore((state)=> state.setStartDescription);
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./../assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
     <Header />
    <SafeAreaView>

      <View style={tw`pb-4`}>
        <Image
          source={require("./../assets/images/logo.png")}
          style={{ width: 300, height: 100 }}
        />
      </View>
      <GooglePlacesAutocomplete
      placeholder='Search'
      debounce={200}
      styles={{
        container:{
          flex:0,
        },
        textInput:{
          fontSize:18,

        }
      }}
      onPress={(data, details = null) => {
        storeStartLocation(details.geometry.location);
        setDescription(data.description);
        storeEndLocation(null)
        // console.log('details', details.geometry)
        // navigation.navigate('GetRide');
      }}
      fetchDetails={true}
      minLength={2}
      enablePoweredByContainer={false}
      nearbyPlacesAPI='GooglePlacesSearch'
      
      query={{
        key: GOOGLE_MAP_API_KEY,
        language: 'en',
      }}
    />
      <NavOptions />

      


    </SafeAreaView>
    </>
  );
}
