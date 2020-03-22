import React from 'react';
import { Container } from './components/Container';
import { Box } from './components/Box';
import { Input } from 'components/Input';

const App: React.FC = (): JSX.Element => (
  <Container flex h="100vh" w="100vw" jc="center">
    <Box h="60vh" w="45vw" bgc="steelBlue" opacity={0.4} mt={5} p={50}>
      <Container h="100%" w="100%" flex jc="center">
        <Input />
      </Container>
    </Box>
  </Container>
);

export default App;
