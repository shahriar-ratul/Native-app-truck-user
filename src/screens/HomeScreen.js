import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
    return (
      <View>
        <Text>Home Screen</Text>

          <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Login')}>
            Login
          </Button>
      </View>
    );
  }
