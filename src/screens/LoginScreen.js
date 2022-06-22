import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  return (
    <View >
        <Text>Home Screen</Text>
        <Button
          title="Go to Homw Screen"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
  );
}
