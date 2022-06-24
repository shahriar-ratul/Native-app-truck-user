import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { Button, IconButton, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import Loading from "../components/Loading";
import { Formik } from "formik";
import * as Yup from "yup";
export default function LoginScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("./../assets/images/logo.png")}
          style={{ width: 300, height: 100, marginBottom: 30 }}
        />
      </View>

      <Text
        style={{
          fontFamily: "Roboto-Medium",
          fontSize: 28,
          fontWeight: "500",
          color: "blue",
          marginBottom: 15,
          textAlign: "center",
        }}
      >
        Welcome back!
      </Text>
      <Text
        style={{
          fontFamily: "Roboto-Medium",
          fontSize: 28,
          fontWeight: "500",
          color: "#333",
          marginBottom: 30,
          textAlign: "center",
        }}
      >
        Please login to your account.
      </Text>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required("Email is required"),
          password: Yup.string()
            .min(4)
            .max(200, "Password should not exceed 200 chars.")
            .required(),
        })}
        onSubmit={(values) =>
          console.log(`Form data: ${JSON.stringify(values)}`


          )}
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
          <View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <IconButton icon="email" size={30} />
              <TextInput
                style={{ width: "80%" }}
                label="Email"
                mode="flat"
                selectTextOnFocus={true}
                placeholder="Enter your email"
                placeholderTextColor="black"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                value={values.email}
              />
            </View>

            {touched.email && errors.email && (
              <Text
                style={{ fontSize: 12, color: "#FF0D10", textAlign: "center" }}
              >
                {errors.email}
              </Text>
            )}

            <View style={{ display: "flex", flexDirection: "row" }}>
              <IconButton icon="key" size={30} />
              <TextInput
                style={{ width: "80%" }}
                label="Password"
                mode="flat"
                placeholder="Enter your password"
                placeholderTextColor="black"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
                value={values.password}
              />
            </View>
            {touched.password && errors.password && (
              <Text
                style={{ fontSize: 12, color: "#FF0D10", textAlign: "center" }}
              >
                {errors.password}
              </Text>
            )}

            <View
              style={{ alignItems: "center", marginTop: 30, marginBottom: 30 }}
            >
              <Button
                style={{ width: "50%" }}
                icon="login"
                mode="contained"
                onPress={handleSubmit}
              >
                Login
              </Button>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}
