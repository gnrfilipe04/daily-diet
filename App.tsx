import { NativeBaseProvider } from 'native-base';
import { theme } from './src/theme';
import { Routes } from './src/routes';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Routes />
    </NativeBaseProvider>
  );
}
