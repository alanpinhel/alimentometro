import React from 'react';
import { createGlobalStyle } from 'styled-components';
import aw from 'alimentometro-wrapper';
import Foods from './components/Foods';

function App() {
  return (
    <>
      <GlobalStyle />
      <Foods foods={aw.getAlimentos()} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    width: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,
    Cantarell, "Helvetica Neue", sans-serif;
  }
`;

export default App;
