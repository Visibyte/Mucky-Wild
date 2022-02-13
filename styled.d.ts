import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        grey: string;
      };
      accents: {
        brown: string;
        orange: string;
      };
    };
    sizes: {
      h1: {
        sm: string;
        md: string;
        lg: string;
      };
      h2: {
        sm: string;
        md: string;
        lg: string;
      };
      h3: {
        sm: string;
        md: string;
        lg: string;
      };
      p: string;
      nav: string;
    };
    spacing: {
      lineHeight: {
        h1: string;
        h2: string;
        h3: string;
        p: string;
      };
      letterSpacing: {
        h1: string;
        h2: string;
        h3: string;
        p: string;
        nav: string;
      };
    };
    fontFamily: {
      workSans: string;
      playfair: string;
    };
  }
}
