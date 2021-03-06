import styled from 'styled-components';
//NOTE: this might be better named "Section"

interface Props {
  h: string;
  w: string;
  p?: number;
  br?: number;
  bgc?: string;
  flex?: boolean;
  fd?: string;
  jc?: CSS.JustifyContent;
  center?: boolean;
  bp?: string;
  pos?: string;
  z?: string;
  oy?: string;
  ox?: string;
  m?: string;
}

export const Container = styled.section<Props>`
  display: ${({ flex }) => flex && 'flex'};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  justify-content: ${({ jc }) => jc && 'center'};
  padding: ${({ p }) => p && `${p}px`};
  margin: ${({ m }) => m};
  border-radius: ${({ br }) => br && `${br}px`};
  background-color: ${({ theme, bgc }) => bgc && theme.colors[bgc].hex};
  position: ${({ pos }) => pos};
  z-index: ${({ z }) => z};
  ${({ fd, flex }) => flex && fd && `flex-direction: ${fd}`};
  ${({ theme, bp }) =>
    theme.breakpoints[bp] && `@media (max-width: ${theme.breakpoints[bp]}){width: 90vw; height: 80vh}`};
  overflow-y: ${({ oy }) => oy};
  overflow-x: ${({ ox }) => ox};
`;
