import React from 'react';
import { Container } from './components/Container';
import { Box } from './components/Box';

const App: React.FC = (): JSX.Element => (
  <Container flex h="100vh" w="100vw" jc="center">
    <Box h="60vh" w="45vw" bgc="steelBlue" opacity={0.4} mt={5} p={50}>
      <h1 style={{ color: 'white' }}>RSVP</h1>
      <input type="text" />
    </Box>
  </Container>
);

export default App;
