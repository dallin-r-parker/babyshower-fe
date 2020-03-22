import React from "react";
import { Container } from "./components/Container";
import { Box } from "./components/Box";
import { Star } from "components/Star";

const App: React.FC = (): JSX.Element => (
  <Container flex h="100vh" w="100vw" jc="center">
    <Star />
    <Box h="60vh" w="45vw" opacity={0.4} bgc="steelBlue">
      <h1>RSVP</h1>
      <input type="text" />
    </Box>
  </Container>
);

export default App;
