import React from 'react';
import { Container } from './components/Container';
import { Box } from './components/Box';
import { Form } from 'components/Form';

const App: React.FC = (): JSX.Element => (
  <Container flex h="100vh" w="100vw" jc="center">
    <Box h="60vh" w="45vw" bgc="steelBlue" opacity={0.4} mt={5} p={50} bp="tablet">
      <Container h="100%" w="100%" flex fd="column">
        <Form />
      </Container>
    </Box>
  </Container>
);

export default App;
