import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PhoneScreen from '../screens/PhoneScreen';
import OtpScreen from '../screens/OtpScreen';
import ForgotOtpScreen from '../screens/ForgotOtpScreen';
import ForgotPhoneScreen from '../screens/ForgotPhoneScreen';
import ForgotPassword from '../screens/ForgotPassword';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen name="Welcome" component={SplashScreen}
      options={{
          
          headerStyle: {
            backgroundColor: "#03baab",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login Here', headerStyle: {
            backgroundColor: '#03baab',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register Here', headerStyle: {
            backgroundColor: '#03baab',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
      <Stack.Screen name="Otp" component={OtpScreen} options={{ title: 'OTP', headerStyle: {
            backgroundColor: '#03baab',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
      <Stack.Screen name="Phone" component={PhoneScreen} options={{ title: 'OTP', headerStyle: {
            backgroundColor: '#03baab',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />

      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: 'OTP', headerStyle: {
            backgroundColor: '#03baab',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />

      
      <Stack.Screen name="ForgotPasswordPhone" component={ForgotPhoneScreen} options={{ title: 'OTP', headerStyle: {
            backgroundColor: '#03baab',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
      <Stack.Screen name="ForgotPasswordOtp" component={ForgotOtpScreen} options={{ title: 'OTP', headerStyle: {
            backgroundColor: '#03baab',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
        
    </Stack.Navigator>
  );
};

export default AuthStack;