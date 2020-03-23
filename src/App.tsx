import React from 'react';
import { Container } from './components/Container';
import { Box } from './components/Box';
import { Form } from './components/Form';
import { Decorations } from './components/Decorations';
import { Heading } from './components/Heading';

const App: React.FC = (): JSX.Element => (
  <Container flex h="100vh" w="100vw" jc="center" fd="column">
    <Decorations />
    <Heading />
    <Container m="20px auto" h="auto" w="auto" flex fd="column" z="2">
      <Box h="fit-content" w="45vw" bgc="steelBlue" opacity={0.7} mt={5} p={50} bp="tablet">
        <Form />
      </Box>
    </Container>
  </Container>
);

export default App;
