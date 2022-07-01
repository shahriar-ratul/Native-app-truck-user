import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { GOOGLE_MAP_API_KEY } from "@env";
import tw from "twrnc";
import { Button, IconButton, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import Loading from "../components/Loading";
import { Formik } from "formik";
import * as Yup from "yup";
import createAuthStore from "../store/AuthStore";
import axios from "axios";
import { BASE_URL } from "../config";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { TouchableOpacity } from "react-native-web";

export default function NewPackageScreen({ navigation }) {
  const [error, setError] = useState(null);
  const [startDescription, setStartDescription] = useState("");
  const [endDescription, setEndDescription] = useState("");
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [distance,setDistance] = useState(0);
  const [price,setPrice] = useState(0);
  const [travelInfo,setTravelInfo] = useState(null);
  const token = createAuthStore((state) => state.token);
  const [success, setSuccess] = useState(null);
  useEffect(() => {
    if (!startLocation || !endLocation) return;
    const getTravelTime = async () => {
      try {
        // console.log(startDescription);
        // console.log(endDescription);
        await axios
          .get(
            `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${startDescription}&destinations=${endDescription}&key=${GOOGLE_MAP_API_KEY}`
          )
          .then((res) => {
            if (res.data) {
              if (res.data.rows[0].elements[0].status === "OK") {
                let value = res.data.rows[0].elements[0].distance.value;
                let data = value / 1000;
                setDistance(data);
                setPrice(data * 1000);
                setTravelInfo(res.data.rows[0].elements[0]);
                console.log(res.data.rows[0].elements[0].distance.value)
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } catch {
        console.log("error");
      }
    };
    getTravelTime();
  }, [startDescription, endDescription, GOOGLE_MAP_API_KEY]);




  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }


  return (
    <Formik
      initialValues={{
        notes: "",
        weight: "",
      }}
      validationSchema={Yup.object().shape({
        notes: Yup.string()
          .max(30, "Must be 50 characters or less")
          .required("Please enter your Notes"),
        weight: Yup.string()
        .required("Please enter your weight"),
      })}
      onSubmit={async (values) => {
        try {
          // console.log(url)
          const header = {
            'Authorization': `Bearer ${token}`,
            Accept: "application/json",
            
          };
        
          await axios
            .post(`${BASE_URL}/api/user/parcels`, {
              start_location: startDescription,
              s_latitude: startLocation.lat,
              s_longitude: startLocation.lng,
              end_location: endDescription,
              d_latitude: endLocation.lat,
              d_longitude: endLocation.lng,
              distance: distance,
              total: price,
              notes: values.notes,
              total_weight: values.weight,
            },header)
            .then((res) => {
              if (res.data.success) {
                // console.log(res.data);
                setError(null);
                setDistance(0);
                setPrice(0);
                setTravelInfo(null);
                setStartDescription("");
                setEndDescription("");
                setStartLocation(null);
                setEndLocation(null);
                values.notes = "";
                values.weight = "";
                setSuccess(res.data.message);
                navigation.navigate("Home");
              }
            })
            .catch((err) => {
              // console.log(err.response.data);
              setError(err.response.data.error.error_message);
            });
        } catch {
          setError("Api call error");
        }
      }}
    >
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <SafeAreaView style={{ flex: 1, justifyContent: "flex-start" }}>
          <KeyboardAvoidingView>
            <View style={tw`px-4`}>
              {error && (
                <Text
                  style={{
                    fontSize: 16,
                    color: "#FF0D10",
                    textAlign: "center",
                  }}
                >
                  {error}
                </Text>
              )}

            {success && (
                <Text
                  style={{
                    fontSize: 16,
                    color: "#00FF0A",
                    textAlign: "center",
                  }}
                >
                  {success}
                </Text>
              )}  
              <View >
                <Text style={tw`text-sm pb-2`}>
                  Pick Up At:
                </Text>
              <GooglePlacesAutocomplete
                placeholder={
                  startDescription ? startDescription : "Pick Up Location"
                }
                debounce={200}
                
                styles={toInputBoxStyles}
                onPress={(data, details = null) => {
                  setStartLocation(details.geometry.location);
                  setStartDescription(data.description);
                }}
                fetchDetails={true}
                minLength={2}
                enablePoweredByContainer={false}
                nearbyPlacesAPI="GooglePlacesSearch"
                query={{
                  key: GOOGLE_MAP_API_KEY,
                  language: "en",
                }}
              />
              </View>

              <View >
                <Text style={tw`text-sm pb-2`}>
                  Deliver To:
                </Text>
              <GooglePlacesAutocomplete
                placeholder={
                  endDescription ? endDescription : "Deliver Location"
                }
                debounce={200}
                
                styles={toInputBoxStyles}
                onPress={(data, details = null) => {
                  setEndLocation(details.geometry.location);
                  setEndDescription(data.description);
                }}
                fetchDetails={true}
                minLength={2}
                enablePoweredByContainer={false}
                nearbyPlacesAPI="GooglePlacesSearch"
                query={{
                  key: GOOGLE_MAP_API_KEY,
                  language: "en",
                }}
              />
              </View>


              <View style={{ display: "flex", flexDirection: "row" }}>
                <TextInput
                  multiline={true}
                  numberOfLines={6}
                  style={tw`mb-2 w-full`}
                  label="Notes"
                  mode="flat"
                  selectTextOnFocus={true}
                  placeholder="Enter your Notes"
                  placeholderTextColor="black"
                  keyboardType="default"
                  onChangeText={handleChange("notes")}
                  onBlur={() => setFieldTouched("notes")}
                  value={values.notes}
                />
              </View>

              {touched.notes && errors.notes && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FF0D10",
                    textAlign: "center",
                  }}
                >
                  {errors.notes}
                </Text>
              )}

              <View style={{ display: "flex", flexDirection: "row" }}>
                <TextInput
                  style={tw`mb-2 w-full`}
                  label="weight"
                  mode="flat"
                  selectTextOnFocus={true}
                  placeholder="Enter your weight"
                  placeholderTextColor="black"
                  keyboardType="default"
                  onChangeText={handleChange("weight")}
                  onBlur={() => setFieldTouched("weight")}
                  value={values.weight}
                />
              </View>

              {touched.weight && errors.weight && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FF0D10",
                    textAlign: "center",
                  }}
                >
                  {errors.weight}
                </Text>
              )}

              <View style={tw`flex mt-2`}>
                <Text style={tw`pb-2 font-bold text-xl`}>
                  Distance :  {travelInfo?.distance.text}

                </Text>  
                <Text style={tw`pb-2 font-bold text-xl`}>
                  Price : {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                              // currencyDisplay: "",
                              }).format(price)
                          }
                </Text>
              </View>



              <View
                style={{
                  alignItems: "center",
                  marginTop: 30,
                  marginBottom: 30,
                }}
              >
                <Button
                  style={{ width: "50%" }}
                  icon="login"
                  mode="contained"
                  onPress={handleSubmit}
                >
                  Submit
                </Button>
              </View>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      )}
    </Formik>
  );
}

const toInputBoxStyles = StyleSheet.create({
  container: {
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    fontFamily:"Roboto-Medium",
    borderRadius: 0,
    padding:20,
    fontSize: 16,
    width: "100%",
    // height: 40,
  },
  textInputContainer: {
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
});
const styles = StyleSheet.create({
  profContainer: {
    width: "100%",
    paddingTop: 30,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    height: "10%",
    backgroundColor: "#fff",
  },
  confirmLocation: {
    position: "absolute",
    zIndex: 1,
    bottom: 70,
    width: "100%",
    height: 65,
    alignItems: "center",
    justifyContent: "center",
  },
});
