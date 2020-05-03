import 'styled-components';

interface Breakpoint {
  [key: string]: string;
}

declare module 'styled-components' {
  interface Tyography {}
  export interface DefaultTheme {
    headingMaxSize: string;
    textMaxSize: string;
    maxWidth: string;
    emBase: number;
    emSizes: string[];
    remSizes: string[];
    fontFamilies: {
      [key: string]: {
        name: string;
        weight: number;
      };
    };
    fontSizes: string[];
    primaryColor: string;
    timing: string[];
    colors: {
      [key: string]: string | string[];
    };
    images: any;
    easing: any;
    breakpoints: Breakpoint;
    radius: string;
  }
}
