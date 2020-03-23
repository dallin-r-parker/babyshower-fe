import React from 'react';
import { Container } from './components/Container';
import { Box } from './components/Box';
import { Form } from './components/Form';
import { Decorations } from './components/Decorations';

const App: React.FC = (): JSX.Element => (
  <Container flex h="100vh" w="100vw" jc="center">
    <Decorations />
    <Container h="auto" w="auto" flex fd="column" z="2">
      <Box h="60vh" w="45vw" bgc="steelBlue" opacity={0.7} mt={5} p={50} bp="tablet">
        <Form />
      </Box>
    </Container>
  </Container>
);

export default App;
