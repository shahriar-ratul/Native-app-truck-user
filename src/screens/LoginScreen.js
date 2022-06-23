import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  return (
    <View >
        <Text>login Screen</Text>
        <Button
          title="Go to Home Screen"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
  );
}
