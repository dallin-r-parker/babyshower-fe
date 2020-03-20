import React from "react";
import { withTheme, ITheme } from "styled-components";

const App: React.FC<{ theme: ITheme }> = ({ theme }): JSX.Element => (
  <h1 style={{ color: theme.colors.gold.solid }}>Hello WORLD</h1>
);

export default withTheme(App);
