import React from 'react';
import { Star } from '../Star';
import { Cloud } from '../Cloud';
import { Container } from '../Container';

export const Decorations: React.FC = (): JSX.Element => (
  <Container h="100vh" w="100vw" pos="absolute" z="1">
    <Star t="-23" r="7" />
    <Star t="10" r="25" />
    <Star t="17" r="80" />
    <Star t="33" r="45" />
    <Star t="48" r="30" />
    <Star t="50" r="70" />
    <Star t="66" r="15" />
    <Star t="83" r="33" />
    <Star t="90" r="90" />

    <Cloud t="10" r="10" />
    <Cloud t="70" r="65" />
  </Container>
);
