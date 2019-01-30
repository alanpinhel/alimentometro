import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import aw from 'alimentometro-wrapper';

class App extends React.Component {
  state = {
    foods: {},
    addedFoods: [],
  };

  componentDidMount() {
    this.setState({ foods: aw.getAlimentos() });
  }

  handleSubmit = e => {
    e.preventDefault();

    const { foods } = this.state;
    const {
      food: { value: food },
      amount: { value: amount },
    } = e.target;

    const foodSelected = foods.find(f => f.id === +food);

    this.setState(beforeState => {
      return {
        addedFoods: {
          ...beforeState.addedFoods,
          [food]: {
            name: foodSelected.nome,
            amount: aw.formata(foodSelected.pesoBruto * amount),
          },
        },
      };
    });
  };

  render() {
    const { foods, addedFoods } = this.state;
    return (
      <React.Fragment>
        <GlobalStyle />

        <Header>
          <Title>Alimentômetro</Title>
          <Description>
            Adicione o alimento e o peso em gramas da quantidade que você precisa consumir, para
            saber quanto precisa comprar.
          </Description>
        </Header>

        <Main>
          <Form onSubmit={this.handleSubmit}>
            <select id="food" name="food">
              {Object.keys(foods).map(k => (
                <option key={foods[k].id} value={foods[k].id}>
                  {foods[k].nome}
                </option>
              ))}
            </select>

            <Label htmlFor="amount">
              Quantidade
              <input id="amount" name="amount" type="number" />
            </Label>

            <button type="submit">Adicionar Alimento</button>
          </Form>

          <table>
            <thead>
              <tr>
                <td>Alimento</td>
                <td>Quant.</td>
              </tr>
            </thead>

            <tbody>
              {Object.keys(addedFoods).map(k => (
                <tr key={k}>
                  <td style={{ width: '100%' }}>{addedFoods[k].name}</td>
                  <td style={{ textAlign: 'right' }}>{addedFoods[k].amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Main>
      </React.Fragment>
    );
  }
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

const Header = styled.header`
  margin-bottom: 1rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
`;

const Title = styled.h1`
  text-align: center;
`;

const Description = styled.p`
  text-indent: 1ch;
  line-height: 1.2;
`;

const Main = styled.main`
  padding-right: 0.5rem;
  padding-left: 0.5rem;
`;

const Form = styled.form`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export default App;
