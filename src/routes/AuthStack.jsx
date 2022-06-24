import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PhoneScreen from '../screens/PhoneScreen';
import OtpScreen from '../screens/OtpScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login Here', headerStyle: {
            backgroundColor: '#f3b344',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register Here', headerStyle: {
            backgroundColor: '#f3b344',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
      <Stack.Screen name="Otp" component={OtpScreen} options={{ title: 'OTP', headerStyle: {
            backgroundColor: '#f3b344',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
      <Stack.Screen name="Phone" component={PhoneScreen} options={{ title: 'OTP', headerStyle: {
            backgroundColor: '#f3b344',
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