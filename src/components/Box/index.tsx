import styled from 'styled-components';
import { themeColors } from 'theme/colors';

interface Props {
  h: string;
  w: string;
  br?: number;
  p?: number;
  bgc?: themeColors;
  opacity?: number;
}

export const Box = styled.div<Props>`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  padding: ${({ p }) => p && `${p}px`};
  opacity: ${({ opacity }) => opacity && opacity};
  border-radius: ${({ theme }) => `${theme.br}px`};
  background-color: ${({ theme, bgc }) => bgc && theme.colors[bgc].solid};
`;
