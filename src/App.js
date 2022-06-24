import React, { useEffect } from "react";
import  Router  from "./routes/Router";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {

  async function clearAll() {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }
  
    console.log('Done.')
  }

  useEffect(() => {
    clearAll()
  }, [])
  return (
    <SafeAreaProvider>
      <Router/>
    </SafeAreaProvider>
  );
        
}
