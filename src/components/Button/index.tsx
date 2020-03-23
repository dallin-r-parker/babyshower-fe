import styled from 'styled-components';
import { themeColors } from 'theme/colors';

interface Props {
  h?: string;
  w?: string;
  type?: string;
  bgc: themeColors;
  color?: themeColors;
}

export const Button = styled.input<Props>`
  /* width: ${({ w }) => w};
  height: ${({ h }) => h}; */
  font-family: 'Assistant', sans-serif;
  background: ${({ theme, bgc }) => theme.colors[bgc].hex};
  color: ${({ theme, color }) => theme.colors[color].hex || `white`};
  text-transform: uppercase;
  border: none;
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 5px;
  letter-spacing: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  &:hover {
    cursor: pointer;
    will-change: transform;
    transform: scale(0.95);
    transition: transform 0.15s;
    /* opacity: 0.6;
    transition: all 0.2s; */
  }
`;
