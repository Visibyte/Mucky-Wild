import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  colors: {
    primary: {
      grey: '#292F2F',
    },
    accents: {
      brown: '#7E5846',
      orange: '#BB692E',
    },
  },
  sizes: {
    h1: {
      sm: '40px',
      md: '48px',
      lg: '56px',
    },
    h2: {
      sm: '32px',
      md: '40px',
      lg: '48px',
    },
    h3: {
      sm: '24px',
      md: '32px',
      lg: '40px',
    },
    p: '18px',
    nav: '20px',
  },
  spacing: {
    lineHeight: {
      h1: '56px',
      h2: '48px',
      h3: '40px',
      p: '25px',
    },
    letterSpacing: {
      h1: '5px',
      h2: '4px',
      h3: '3px',
      p: '1px',
      nav: '5px',
    },
  },
  fontFamily: {
    workSans: 'Work Sans',
    playfair: 'Playfair Display',
  },
};

export default defaultTheme;
