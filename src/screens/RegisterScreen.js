import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { IconButton, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import Loading from "../components/Loading";
import { Formik } from "formik";
import * as Yup from "yup";
import createAuthStore from "../store/AuthStore";
import axios from "axios";
import { BASE_URL } from "../config";
export default function RegisterScreen({ navigation }) {
  const [error, setError] = useState(null);
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./../assets/fonts/Roboto-Medium.ttf"),
  });
  
  const setPhone = createAuthStore((state) => state.setPhone);
  const removeOtpVerify = createAuthStore((state) => state.removeOtpVerify);
  const phone = createAuthStore((state) => state.phone);
  const successLogin = createAuthStore((state) => state.successLogin);
  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        phone: phone,
        password: "",
        role: "user",
      }}
      validationSchema={Yup.object().shape({
        first_name: Yup.string()
          .max(30, "Must be 50 characters or less")
          .required("Please enter your first name"),
        last_name: Yup.string()
          .max(30, "Must be 50 characters or less")
          .required("Please enter your last name"),
        username: Yup.string()
          .max(30, "Must be 50 characters or less")
          .required("Please enter your username"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Please enter your email"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Please enter your password"),
      })}
      onSubmit={async (values) => {
        try {
          await axios
            .post(`${BASE_URL}/api/register`, {
              first_name: values.first_name,
              last_name: values.last_name,
              username: values.username,
              email: values.email,
              phone: values.phone,
              password: values.password,
              role: values.role,
            })
            .then((res) => {
              if (res.data.success) {
                removeOtpVerify();
                setPhone(null);
                navigation.navigate("Login");
              }
            })
            .catch((err) => {
              // console.log(err.response.data);
              setError(err.response.data.error.error_message);
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
        // <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
          <View style={styles.container}>
            <StatusBar backgroundColor="#03baab" barStyle="light-content" />
            <View style={styles.header}>
              <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
              <ScrollView>
                <Text style={styles.text_footer}>First Name</Text>
                <View style={styles.action}>
                  <FontAwesome name="user-o" color="#05375a" size={20} />
                  <TextInput
                    style={styles.textInput}
                    // label="First Name"
                    mode="flat"
                    selectTextOnFocus={true}
                    placeholder="First Name"
                    placeholderTextColor="black"
                    keyboardType="default"
                    onChangeText={handleChange("first_name")}
                    onBlur={() => setFieldTouched("first_name")}
                    value={values.first_name}
                  />
                  {touched.first_name && errors.first_name ? (
                    <Animatable.View animation="bounceIn">
                      <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                  ) : null}
                </View>

                <Text style={styles.text_footer}>Last Name</Text>
                <View style={styles.action}>
                  <FontAwesome name="user-o" color="#05375a" size={20} />
                  <TextInput
                    style={styles.textInput}
                    // label="Last Name"
                    mode="flat"
                    selectTextOnFocus={true}
                    placeholder="Last Name"
                    placeholderTextColor="black"
                    keyboardType="default"
                    onChangeText={handleChange("last_name")}
                    onBlur={() => setFieldTouched("last_name")}
                    value={values.last_name}
                  />
                  {touched.last_name && errors.last_name ? (
                    <Animatable.View animation="bounceIn">
                      <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                  ) : null}
                </View>

                <Text style={styles.text_footer}>Username</Text>
                <View style={styles.action}>
                  <FontAwesome name="user-o" color="#05375a" size={20} />
                  <TextInput
                    style={styles.textInput}
                    // label="username"
                    mode="flat"
                    selectTextOnFocus={true}
                    placeholder="username"
                    placeholderTextColor="black"
                    keyboardType="default"
                    onChangeText={handleChange("username")}
                    onBlur={() => setFieldTouched("username")}
                    value={values.username}
                  />
                  {touched.username && errors.username ? (
                    <Animatable.View animation="bounceIn">
                      <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                  ) : null}
                </View>


                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                  <FontAwesome name="envelope-o" color="#05375a" size={20} />
                  <TextInput
                   style={styles.textInput}
                  //  label="Email"
                   mode="flat"
                   selectTextOnFocus={true}
                   placeholder="email"
                   placeholderTextColor="black"
                   keyboardType="email-address"
                   onChangeText={handleChange("email")}
                   onBlur={() => setFieldTouched("email")}
                   value={values.email}
                  />
                  {touched.email && errors.email ? (
                    <Animatable.View animation="bounceIn">
                      <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                  ) : null}
                </View>

                <Text
                  style={[
                    styles.text_footer,
                    {
                      
                    },
                  ]}
                >
                  Password
                </Text>
                <View style={styles.action}>
                  <Feather name="lock" color="#05375a" size={20} />
                  <TextInput
                     style={styles.textInput}
                     mode="flat"
                     placeholder="password"
                     placeholderTextColor="black"
                     secureTextEntry={true}
                     onChangeText={handleChange("password")}
                     onBlur={() => setFieldTouched("password")}
                     value={values.password}
                  />
                  {/* <TouchableOpacity onPress={updateSecureTextEntry}>
                    {values.secureTextEntry ? (
                      <Feather name="eye-off" color="grey" size={20} />
                    ) : (
                      <Feather name="eye" color="grey" size={20} />
                    )}
                  </TouchableOpacity> */}
                </View>

                {/* <Text
                  style={[
                    styles.text_footer,
                    {
                      marginTop: 35,
                    },
                  ]}
                >
                  Confirm Password
                </Text>
                <View style={styles.action}>
                  <Feather name="lock" color="#05375a" size={20} />
                  <TextInput
                    placeholder="Confirm Your Password"
                    secureTextEntry={
                      values.confirm_secureTextEntry ? true : false
                    }
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                  />
                  <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                    {values.secureTextEntry ? (
                      <Feather name="eye-off" color="grey" size={20} />
                    ) : (
                      <Feather name="eye" color="grey" size={20} />
                    )}
                  </TouchableOpacity>
                </View> */}
                {/* <View style={styles.textPrivate}>
                  <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                  </Text>
                  <Text
                    style={[styles.color_textPrivate, { fontWeight: "bold" }]}
                  >
                    {" "}
                    Terms of service
                  </Text>
                  <Text style={styles.color_textPrivate}> and</Text>
                  <Text
                    style={[styles.color_textPrivate, { fontWeight: "bold" }]}
                  >
                    {" "}
                    Privacy policy
                  </Text>
                </View> */}
                <View style={styles.button}>
                  <TouchableOpacity 
                  onPress={handleSubmit}
                  style={styles.signIn} 
                  mode="contained"
                  
                  >
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
                        Sign Up
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity
                   onPress={() => navigation.navigate("Login")}
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
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </Animatable.View>
          </View>

        /*  { <ScrollView>
            <KeyboardAvoidingView>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("./../assets/images/logo.png")}
                  style={{ width: 300, height: 100, marginBottom: 30 }}
                />
              </View>

              <Text
                style={{
                  fontFamily: "Roboto-Medium",
                  fontSize: 18,
                  fontWeight: "500",
                  color: "blue",
                  marginBottom: 15,
                  textAlign: "center",
                }}
              >
                Lets get started with your new account
              </Text>

              <View>
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

                <View style={{ display: "flex", flexDirection: "row" }}>
                  <IconButton icon="account-circle" size={30}   color="#FF4466" />
                  <TextInput
                    style={{ width: "80%" }}
                    label="First Name"
                    mode="flat"
                    selectTextOnFocus={true}
                    placeholder="Enter your First Name"
                    placeholderTextColor="black"
                    keyboardType="default"
                    onChangeText={handleChange("first_name")}
                    onBlur={() => setFieldTouched("first_name")}
                    value={values.first_name}
                  />
                </View>

                {touched.first_name && errors.first_name && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#FF0D10",
                      textAlign: "center",
                    }}
                  >
                    {errors.first_name}
                  </Text>
                )}

                <View style={{ display: "flex", flexDirection: "row" }}>
                  <IconButton icon="account-circle" size={30}  color="#FF4466"  />
                  <TextInput
                    style={{ width: "80%" }}
                    label="Last Name"
                    mode="flat"
                    selectTextOnFocus={true}
                    placeholder="Enter your Last Name"
                    placeholderTextColor="black"
                    keyboardType="default"
                    onChangeText={handleChange("last_name")}
                    onBlur={() => setFieldTouched("last_name")}
                    value={values.last_name}
                  />
                </View>

                {touched.last_name && errors.last_name && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#FF0D10",
                      textAlign: "center",
                    }}
                  >
                    {errors.last_name}
                  </Text>
                )}

                <View style={{ display: "flex", flexDirection: "row" }}>
                  <IconButton icon="account-circle" size={30}  color="#FF4466" />
                  <TextInput
                    style={{ width: "80%" }}
                    label="username"
                    mode="flat"
                    selectTextOnFocus={true}
                    placeholder="Enter your username"
                    placeholderTextColor="black"
                    keyboardType="default"
                    onChangeText={handleChange("username")}
                    onBlur={() => setFieldTouched("username")}
                    value={values.username}
                  />
                </View>

                {touched.username && errors.username && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#FF0D10",
                      textAlign: "center",
                    }}
                  >
                    {errors.username}
                  </Text>
                )}

                <View style={{ display: "flex", flexDirection: "row" }}>
                  <IconButton icon="email" size={30}  color="#FF4466" />
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
                    style={{
                      fontSize: 12,
                      color: "#FF0D10",
                      textAlign: "center",
                    }}
                  >
                    {errors.email}
                  </Text>
                )}

                <View style={{ display: "flex", flexDirection: "row" }}>
                  <IconButton icon="key" size={30}  color="#FF4466" />
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
                    style={{
                      fontSize: 12,
                      color: "#FF0D10",
                      textAlign: "center",
                    }}
                  >
                    {errors.password}
                  </Text>
                )}

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
                    Register
                  </Button>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    marginTop: 30,
                    marginBottom: 30,
                  }}
                >
                  <Text style={{ fontSize: 16, color: "#333" }}>
                    Already have an account?{" "}
                  </Text>
                  <Button
                    style={{ width: "50%" }}
                    icon="login"
                    mode="text"
                    onPress={() => navigation.navigate("Login")}
                  >
                    Login
                  </Button>
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView> }*/
        // </SafeAreaView>
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
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === "ios" ? 3 : 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#03baab",
    fontWeight: "bold",
    fontSize: 30,
    textAlign:"center"
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
    paddingBottom:5,
    paddingTop:5
    
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 20,
    color: "#05375a",
    paddingTop: 10
    
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
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  color_textPrivate: {
    color: "grey",
  },
});
