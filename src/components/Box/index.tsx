import styled from "styled-components";
import { themeColors } from "src/theme/colors";

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
  border-radius: ${({ br }) => br && `${br}px`};
  background-color: ${({ theme, bgc }) => bgc && theme.colors[bgc].solid};
  opacity: ${({ opacity }) => opacity && opacity};
`;
