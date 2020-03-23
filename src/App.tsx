import React from 'react';
import { Container } from './components/Container';
import { Box } from './components/Box';
import { Form } from './components/Form';
import { Decorations } from './components/Decorations';
import { Heading } from './components/Heading';
import { Registry } from './components/Registry';

const App: React.FC = (): JSX.Element => (
  <Container flex h="100%" w="100vw" jc="center" fd="column">
    <Decorations />
    <Heading />
    <Container m="20px auto" h="auto" w="auto" flex fd="column" z="2">
      <Box h="fit-content" w="45vw" bgc="steelBlue" opacity={0.7} mt={10} p={40} bp="tablet">
        <Form />
      </Box>
      <Box h="fit-content" w="45vw" bgc="white" opacity={0.65} mt={10} p={20} bp="tablet">
        <Registry />
      </Box>
    </Container>
  </Container>
);

export default App;
