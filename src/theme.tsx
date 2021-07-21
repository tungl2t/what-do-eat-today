import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '640px',
  md: '768px',
  '2md': '795px',
  lg: '1024px',
  '2lg': '1185px',
  xl: '1280px',
  '2xl': '1536px',
});

const theme = extendTheme({
  styles: {
    global: {
      main: {
        marginTop: '60px',
        minHeight: 'calc(100vh - 60px)',
        display: 'flex',
        flexDirection: 'column',
      },
    },
  },
  breakpoints,
});

export default theme;
