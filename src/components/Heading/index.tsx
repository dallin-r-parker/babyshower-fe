import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from '../Container';
import { colors } from 'theme/colors';

const animate = keyframes`
0% {
    color: ${colors.gold.gradient};
}

40% {
    color:${colors.white.hex};
}

100% {
    color: ${colors.gold.gradient};
}`;

export const CursiveStyle = styled.h1`
  position: relative;
  font-family: Sacramento;
  font-size: 80px;
  color: gold;
  transform: rotate(345deg);
  top: -7vw;
  left: -10vw;
  z-index: 13;
  animation: ${animate} 4s infinite alternate-reverse;

  ${({ theme }) =>
    `@media (max-width: ${theme.breakpoints['tablet']}){transform: rotate(350deg); top: -10vh}`};
`;

export const CustomTable = styled.table`
  width: 45vw;

  margin: 0 auto;
  background-color: white;
  opacity: 0.65;
  font-size: 22px;
  padding: 0px 40px;
  border-radius: 10px;
  ${({ theme }) => `@media (max-width: ${theme.breakpoints['tablet']}){width: 90%}`};
  & {
    table,
    th,
    td {
      font-family: 'Assistant', sans-serif;
      border-radius: 5px;
      border-collapse: collapse;
    }
    th,
    td,
    tr {
      padding: 15px 20px;
    }
    th {
      text-align: left;
      letter-spacing: 3px;
      font-weight: 700;
    }
  }
`;

export const Heading: React.FC = (): JSX.Element => (
  <Container h="auto" w="auto" jc="center" z="13">
    <CustomTable>
      <tbody>
        <tr>
          <th>WHAT:</th>
          <td>
            Mikayda Parker's <span style={{ fontWeight: 'bold' }}>VIRTUAL</span> baby shower
          </td>
        </tr>
        <tr>
          <th>WHEN:</th>
          <td>Saturday, March 28, 2020 at 2:00 PM EST</td>
        </tr>
        <tr>
          <th>WHERE:</th>
          <td>From the comfort of your home computer.</td>
        </tr>
        <tr>
          <th>WHY:</th>
          <td>
            Even though we are social distancing, we can still celebrate together with{' '}
            <span style={{ fontWeight: 'bold' }}>games, chatting, and good cheer</span>.
          </td>
        </tr>
        <tr>
          <th>HOW:</th>
          <td>
            You will need to download{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://zoom.us/download">
              Zoom
            </a>{' '}
            and have a webcam on your device. Contact Dallin (
            <a href="mailto: dallin.r.parker@gmail.com">dallin.r.parker@gmail.com</a>) if you need help
            setting up your personal device.
          </td>
        </tr>
      </tbody>
    </CustomTable>
  </Container>
);
