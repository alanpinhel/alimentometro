import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { HashRouter, Link, Route } from 'react-router-dom';
import FoodsList from './containers/FoodsList';
import FoodsForm from './containers/FoodsForm';

const Home = () => <Link to="/foods">Alimentos</Link>;

function App() {
  return (
    <HashRouter>
      <>
        <GlobalStyle />
        <Route path="/" exact component={Home} />
        <Route path="/foods" exact component={FoodsList} />
        <Route path="/foods/:id" component={FoodsForm} />
      </>
    </HashRouter>
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
