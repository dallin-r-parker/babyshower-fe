import styled from 'styled-components';
import { themeColors } from 'theme/colors';

interface Props {
  h: string;
  w: string;
  br?: number;
  p?: number;
  bgc?: themeColors;
  opacity?: number;
  mt?: number;
}

export const Box = styled.div<Props>`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  padding: ${({ p }) => p && `${p}px`};
  border-radius: ${({ theme }) => `${theme.br}px`};
  margin-top: ${({ mt }) => `${mt}vh`};
  background-color: ${({ theme, bgc, opacity }) =>
    opacity ? `rgba(${theme.colors[bgc].rgb}, ${opacity})` : theme.colors[bgc].hex};
  box-shadow: 0 1px 6px 0 rgba(95, 95, 95, 0.54);
`;
