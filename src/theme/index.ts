import { DefaultTheme } from 'styled-components';
import { colors } from './colors';
import { breakpoints } from './mediaQueries';

export const theme: DefaultTheme = {
  colors,
  br: 7,
  boxShadow: '0 1px 6px 0 rgba(95,95,95,0.54)',
  breakpoints
};
