import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Work Sans',
    body: 'Work Sans',
  },
  colors: {
    black: {
      50: '#E8E8E8',
      100: '#D1D1D1',
      200: '#B5B5B5',
      300: '#A1A1A1',
      400: '#858585',
      500: '#707070',
      600: '#595959',
      700: '#424242',
      800: '#292929',
      900: '#131313',
    },
    ultramarine: {
      50: '#EBEBFF',
      100: '#D2D4FF',
      200: '#BABEFF',
      300: '#A1A7FF',
      400: '#8890FF',
      500: '#707AFF',
      600: '#5763FF',
      700: '#3E4CFF',
      800: '#2636FF',
      900: '#0D1FFF',
    },
    vermilion: {
      50: '#FFE8E8',
      100: '#FCCECE',
      200: '#F9B4B4',
      300: '#F69B9B',
      400: '#F38181',
      500: '#F16767',
      600: '#EE4D4D',
      700: '#EB3434',
      800: '#E81A1A',
      900: '#E50000',
    },
    violet: {
      50: '#F9E8FF',
      100: '#F5CEFF',
      200: '#F1B4FF',
      300: '#EC9BFF',
      400: '#E881FF',
      500: '#E467FF',
      600: '#E04DFF',
      700: '#DB34FF',
      800: '#D71AFF',
      900: '#D300FF',
    },
  },
});

export default theme;
