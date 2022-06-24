import React from "react";
import  Router  from "./routes/Router";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Router/>
    </SafeAreaProvider>
  );
        
}
