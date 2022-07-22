import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
  TextInput
} from "react-native";
import { Button, IconButton, } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import Loading from "../components/Loading";
import { Formik } from "formik";
import * as Yup from "yup";
import { BASE_URL } from "../config/index";
import createAuthStore from "../store/AuthStore";
import axios from "axios";
import { useTheme } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
// import { ImageBackground } from "react-native-web";
export default function LoginScreen({ navigation }) {
  const setToken = createAuthStore((state) => state.setToken);
  const successLogin = createAuthStore((state) => state.successLogin);
  const OtpVerify = createAuthStore((state) => state.OtpVerify);
  const [error, setError] = useState(null);
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./../assets/fonts/Roboto-Medium.ttf"),
  });
  const { colors } = useTheme();

  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required("Email is required"),
        password: Yup.string()
          .min(4)
          .max(200, "Password should not exceed 200 chars.")
          .required(),
      })}
      onSubmit={async (values) => {
        try {
          await axios
            .post(`${BASE_URL}/api/user/login`, {
              username: values.email,
              password: values.password,
            })
            .then((res) => {
              // console.log(res);
              if (res.data.success) {
                // console.log(res.data.data.token);
                setToken(res.data.data.token);
                successLogin();
              }
            })
            .catch((err) => {
              // console.log(err);
              setError(err.response.data.message);
            });
        } catch {
          setError("Something went wrong");
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
        <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
          {/* <ScrollView> */}
          {/* <KeyboardAvoidingView> */}
          <View style={styles.container}>
            <StatusBar backgroundColor="#03baab" barStyle="light-content" />
            <View style={styles.header}>
              <ImageBackground
                // source={require("../assets/bg2.png")}
                resizeMode="cover"
                style={styles.bgimg}
              >
                <Text style={styles.text_header}>Sign In</Text>
              </ImageBackground>
            </View>
            <Animatable.View
              animation="fadeInUpBig"
              style={[
                styles.footer,
                {
                  // backgroundColor: colors.background
                },
              ]}
            >
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: colors.text,
                  },
                ]}
              >
                Username
              </Text>

              <View style={styles.action}>
                <FontAwesome name="user-o" color={colors.text} size={20} />
                <TextInput
                  placeholder="Username"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  selectTextOnFocus={true}
                  autoCapitalize="none"
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                  value={values.email}
                />
                
                {values.check_textInputChange ? (
                  <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>
              {touched.email && errors.email && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FF0D10",
                    textAlign: "center",
                  }}
                >
                  {errors.email}
                </Text>
              )}

              <Text
                style={[
                  styles.text_footer,
                  {
                    color: colors.text,
                    marginTop: 35,
                  },
                ]}
              >
                Password
              </Text>
              <View style={styles.action}>
                <Feather name="lock" color={colors.text} size={20} />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#666666"
                  // secureTextEntry={data.secureTextEntry ? true : false}
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  secureTextEntry={true}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  value={values.password}
                />
                <TouchableOpacity
                // onPress={updateSecureTextEntry}
                >
                  {values.secureTextEntry ? (
                    <Feather name="eye-off" color="grey" size={20} />
                  ) : (
                    <Feather name="eye" color="grey" size={20} />
                  )}
                </TouchableOpacity>
                {touched.password && errors.password && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#FF0D10",
                      textAlign: "center",
                    }}
                  >
                    {errors.password}
                  </Text>
                )}
              </View>
              <TouchableOpacity>
                <Text style={{ color: "#009387", marginTop: 15 }}>
                  Forgot password?
                </Text>
              </TouchableOpacity>
              <View style={styles.button}>
                <TouchableOpacity style={styles.signIn} onPress={handleSubmit}>
                  <LinearGradient
                    colors={["#08d4c4", "#01ab9d"]}
                    style={styles.signIn}
                  >
                    <Text
                      style={[
                        styles.textSign,
                        {
                          color: "#fff",
                        },
                      ]}
                    >
                      Sign In
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() =>
                  OtpVerify === true
                    ? navigation.navigate("Register")
                    : navigation.navigate("Otp")
                }
                  style={[
                    styles.signIn,
                    {
                      borderColor: "#009387",
                      borderWidth: 1,
                      marginTop: 15,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: "#009387",
                      },
                    ]}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
              {/* <Text
              style={{
                fontFamily: "Roboto-Medium",
                fontSize: 18,
                fontWeight: "500",
                color: "#333",
                marginBottom: 30,
                textAlign: "center",
              }}
            >
              Please login to your account.
            </Text> */}

              {/* <View>
              {error && (
                <Text
                  style={{
                    fontFamily: "Roboto-Medium",
                    fontSize: 20,
                    fontWeight: "500",
                    color: "red",
                    marginBottom: 10,
                    textAlign: "center",
                  }}
                >
                  {error}
                </Text>
              )} */}

              {/* <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 10,
                }}
              > */}
              {/* <IconButton icon="email" size={30} color="#FF4466" /> */}
              {/* <TextInput
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
                /> */}
              {/* </View> */}

              {/* {touched.email && errors.email && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FF0D10",
                    textAlign: "center",
                  }}
                >
                  {errors.email}
                </Text>
              )} */}

              {/* <View style={{ display: "flex", flexDirection: "row" }}>
                <IconButton icon="key" size={30} color="#FF4466" />
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
              </View> */}
              {/* {touched.password && errors.password && (
                <Text
                  style={{
                    fontSize: 12,
                    color: "#FF0D10",
                    textAlign: "center",
                  }}
                >
                  {errors.password}
                </Text>
              )} */}
              {/* 
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
                  color="#5071F1"
                >
                  Login
                </Button>
              </View> */}
              {/* <View
                style={{
                  alignItems: "center",
                  marginTop: 30,
                  marginBottom: 30,
                }}
              >
                <Text style={{ fontSize: 16, color: "#333" }}>
                  Don't have an account?{" "}
                </Text>
                <Button
                  style={{ width: "50%" }}
                  icon="login"
                  mode="text"
                  onPress={() =>
                    OtpVerify === true
                      ? navigation.navigate("Register")
                      : navigation.navigate("Otp")
                  }
                >
                  Register
                </Button>
              </View> */}
              {/* </View> */}
              {/* </KeyboardAvoidingView> */}
              {/* </ScrollView> */}
            </Animatable.View>
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  header: {
    flex: 1,
    // justifyContent: "flex-end",
    // paddingHorizontal: 20,
    // paddingBottom: 50,
  },
  text_header: {
    color: "#03baab",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    backgroundColor: "#fff",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bgimg: {
    flex: 1,
    justifyContent: "center",
    
  },
});
