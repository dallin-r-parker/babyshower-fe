import styled, { DefaultTheme } from "styled-components";

interface Props {
  h: string;
  w: string;
  p?: number;
  br?: number;
  bgc?: string;
  flex?: boolean;
  fd?: boolean;
  jc?: CSS.JustifyConent;
  center?: boolean;
  extend?: (theme: DefaultTheme) => string;
}

export const Container = styled.section<Props>`
  display: ${({ flex }) => flex && "flex"};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  justify-content: ${({ jc }) => jc && "center"};
  padding: ${({ p }) => p && `${p}px`};
  border-radius: ${({ br }) => br && `${br}px`};
  background-color: ${({ theme, bgc }) => bgc && theme.colors[bgc].solid};
  ${({ fd, flex }) => flex && fd && `flex-direction: ${fd}`};
  ${({ theme, extend }) => extend && extend(theme)};
`;
