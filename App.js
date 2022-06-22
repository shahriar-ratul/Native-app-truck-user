import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './src/App';
import 'react-native-gesture-handler';


export default function Main() {
  return (
    <PaperProvider >
      <App />
    </PaperProvider>
  );
}