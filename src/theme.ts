import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    pink: {
      50: '#FFE3EC',
      100: '#FFB8D2',
      // Add more shades as needed
    },
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
});

export default theme;

