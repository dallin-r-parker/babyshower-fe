import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';

export const CursiveStyle = styled.h1`
  position: relative;
  font-family: Sacramento;
  font-size: 80px;
  color: gold;
  transform: rotate(330deg);
  top: -100px;
  left: 10vw;
  z-index: 13;
  ${({ theme }) => `@media (max-width: ${theme.breakpoints['tablet']}){width: 90vw; top: 20px;
  left: -2vw; transform: rotate(350deg);}`};
`;

export const CustomTable = styled.table`
  width: 45vw;
  border: 1px solid black;
  margin: 0 auto;
  background-color: white;
  opacity: 0.65;
  ${({ theme }) => `@media (max-width: ${theme.breakpoints['tablet']}){width: 90vw}`};
  &&& {
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
      padding: 10px;
    }
    th {
      text-align: left;
      letter-spacing: 3px;
      font-weight: 700;
    }
  }
`;

export const Heading: React.FC = (): JSX.Element => (
  <Container h="100vh" w="100vw" jc="center" pos="relative" z="13">
    <h1 style={{ textAlign: 'center', padding: '20px', paddingTop: '120px', fontWeight: `bold` }}>
      twinkle,
      <br /> twinkle, <br />
      little star
    </h1>
    <h2 style={{ textAlign: 'center' }}>you're invited </h2>

    <CustomTable>
      <tr>
        <th>WHAT:</th>
        <td>Mikayda's VIRTUAL baby shower</td>
      </tr>
      <tr>
        <th>WHEN:</th>
        <td>Saturday, March 28, 2020 at 2:00 PM EST</td>
      </tr>
      <tr>
        <th>WHERE:</th>
        <td>The comfort of your home computer</td>
      </tr>
      <tr>
        <th>WHERE:</th>
        <td>Because we all need some games, chatting, celebration, and good cheer</td>
      </tr>
      <tr>
        <th>HOW:</th>
        <td>
          Google Hangouts - contact Dallin (
          <a href="mailto: dallin.r.parker@gmail.com">dallin.r.parker@gmail.com </a>) if you need help setting
          up your personal machine
        </td>
      </tr>
    </CustomTable>
    <CursiveStyle>RSVP</CursiveStyle>
  </Container>
);
