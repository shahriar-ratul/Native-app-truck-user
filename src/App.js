import React, { useEffect } from "react";
import Router from "./routes/Router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAvoidingView, Platform } from "react-native";
export default function App() {
  async function clearAll() {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }
  }

  useEffect(() => {
    clearAll();
  }, []);
  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        style={{ flex: 1 }}
      >
        <Router />
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}
