import React from "react";
import { withTheme, DefaultTheme } from "styled-components";

const App: React.FC<{ theme: DefaultTheme }> = ({ theme }): JSX.Element => (
  <h1 style={{ color: theme.colors.gold.solid }}>Hello WORLD</h1>
);

export default withTheme(App);
