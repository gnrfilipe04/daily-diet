import { extendTheme } from 'native-base';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

export const theme = extendTheme({
    config,
    colors: {
      gray: {
        100: '#FAFAFA',
        200: '#EFF0F0',
        300: '#DDDEDF',
        400: '#B9BBBC',
        500: '#5C6265',
        600: '#333638',
        700: '#1B1D1E'
      },
      green: {
        100: '#E5F0DB',
        300: '#CBE4B4',
        800: '#639339'
      },
      red: {
        100: '#F4E6E7',
        300: '#F3BABD',
        800: '#BF3B44'
      },
    }})
