import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import { borderColor } from '../utils/constants';

const List = styled.ul`
  margin: 0;
  padding-left: 0.5rem;
  list-style: none;
`;

const Item = styled.li`
  &:not(:last-child) a {
    border-bottom: 1px solid ${borderColor};
  }
`;

const Button = styled.a`
  display: block;
  line-height: 1;
  color: #000;
  text-decoration: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

function FoodList({ foods, handleCalculate }) {
  return (
    <>
      <Header action={{ label: 'Tela Inicial', handleClick: () => {} }} title="Alimentos" />

      <Main>
        <List>
          {foods.map(f => (
            <Item key={f.id}>
              <Button onClick={() => handleCalculate(f.id)}>{f.nome}</Button>
            </Item>
          ))}
        </List>
      </Main>
    </>
  );
}

FoodList.propTypes = {
  foods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nome: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FoodList;
