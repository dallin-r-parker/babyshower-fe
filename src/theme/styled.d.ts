import { ThemeBreakpoints } from './mediaQueries';
import 'styled-components';
import { ThemeColors } from './colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeColors;
    br: number;
    boxShadow: string;
    breakpoints: ThemeBreakpoints;
  }
}
