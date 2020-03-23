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

export const Registry: React.FC = (): JSX.Element => (
  <>
    <h2
      style={{
        textAlign: 'center',
        padding: '10px',
        paddingBottom: '30px',
        fontSize: `24px`
      }}
    >
      Find the registry for <br />
      <span style={{ fontFamily: 'Sacramento', fontSize: `30px` }}>Mikayda & Dallin</span> <br />
      on <a href="https://www.babylist.com/baby-reg-mikayda">Babylist</a>
    </h2>
  </>
);
