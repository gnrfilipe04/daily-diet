import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Center, Text } from 'native-base';
import { theme } from './src/theme';
import { Home } from './src/screens/Home';
import { Stats } from './src/screens/Stats';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Home />
    </NativeBaseProvider>
  );
}
