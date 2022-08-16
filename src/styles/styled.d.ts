// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    light: {
      bgColor: string,
      bgColor2: string,
      color: string,
    },
    dark: {
      bgColor: string,
      bgColor2: string,
      color: string,
    }
  }
} 