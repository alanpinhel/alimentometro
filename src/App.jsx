import React from 'react';
import { createGlobalStyle } from 'styled-components';
import aw from 'alimentometro-wrapper';
import FoodList from './components/FoodList';
import FoodForm from './components/FoodForm';

function App() {
  return (
    <>
      <GlobalStyle />
      {<FoodList foods={aw.getAlimentos()} />}
      {undefined && <FoodForm />}
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
