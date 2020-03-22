import React from 'react';
import { render } from 'react-dom';

import App from './App';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/globalStyles';

const root = document.getElementById('root');
render(
  <ThemeProvider theme={theme}>
    <>
      <App />
      <GlobalStyles />
    </>
  </ThemeProvider>,
  root
);
