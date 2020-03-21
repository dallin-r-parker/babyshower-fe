import styled, { DefaultTheme } from "styled-components";

interface Props {
  h: string;
  w: string;
  p?: number;
  br?: number;
  bgc?: string;
  flex?: boolean;
  fd?: string;
  center?: boolean;
  extend?: (theme: DefaultTheme) => string;
}
export const Container = styled.div<Props>`
  ${({ flex }) => flex && "display: flex"};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  padding: ${({ p }) => p && `${p}px`};
  border-radius: ${({ br }) => br && `${br}px`};
  background-color: ${({ theme, bgc }) => bgc && theme.colors[bgc].solid};
  justify-content: center;
  ${({ fd, flex }) => flex && fd && `flex-direction: ${fd}`};
  ${({ theme, extend }) => extend && extend(theme)};
`;
