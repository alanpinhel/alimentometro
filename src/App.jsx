import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import FoodsList from './containers/FoodsList';

const Home = () => <Link to="/foods">Alimentos</Link>;
const Form = () => <h1>Form</h1>;

function App() {
  return (
    <BrowserRouter>
      <>
        <GlobalStyle />
        <Route path="/" exact component={Home} />
        <Route path="/foods" exact component={FoodsList} />
        <Route path="/foods/:id" component={Form} />
      </>
    </BrowserRouter>
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
