import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const Home = () => <Link to="/foods">Alimentos</Link>;
const List = () => <h1>List</h1>;
const Form = () => <h1>Form</h1>;

function App() {
  return (
    <BrowserRouter>
      <>
        <GlobalStyle />
        <Route path="/" exact component={Home} />
        <Route path="/foods" exact component={List} />
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
