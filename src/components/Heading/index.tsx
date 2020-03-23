import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';

const cursiveStyle = {
  fontFamily: 'Sacramento',
  fontSize: `80px`,
  color: `gold`,
  transform: `rotate(330deg)`
};

export const CustomTable = styled.table`
  &&& {
    table,
    th,
    td {
      border-collapse: collapse;
    }
    th,
    td,
    tr {
      padding: 5px;
    }
    th {
      text-align: left;
    }
    table {
      width: 100%;
      border: 1px solid black;
    }
  }
`;

export const Heading: React.FC = (): JSX.Element => (
  <Container h="100vh" w="100vw" pos="relative" z="1">
    <h2>
      twinkle, <br /> twinkle, <br />
      little star
    </h2>
    <h2>you're invited to Mikayda's VIRTUAL baby shower</h2>
    <CustomTable>
      <tr>
        <th>When:</th>
        <th>Saturday, March 28, 2020 at 2:00 PM EST</th>
      </tr>
      <tr>
        <td>Where:</td>
        <td>
          The comfort of your home computer
          <span>&#42;</span>
        </td>
      </tr>
      <tr>
        <td>What:</td>
        <td>Games, chatting, celebrations, and good cheer</td>
      </tr>
    </CustomTable>
    <h1 style={cursiveStyle}>RSVP</h1>
  </Container>
);
