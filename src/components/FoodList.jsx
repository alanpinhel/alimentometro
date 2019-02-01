import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.2rem;
  margin: 0.5rem;
`;

const List = styled.ul`
  margin: 0;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  list-style: none;
`;

const Item = styled.li`
  &:not(:last-child) a {
    border-bottom: 1px solid #eee;
  }
`;

const Link = styled.a`
  display: block;
  font-size: 1rem;
  line-height: 1;
  color: #000;
  text-decoration: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

function FoodList({ foods }) {
  return (
    <>
      <Title>Alimentos</Title>
      <List>
        {foods.map(f => (
          <Item key={f.id}>
            <Link href="#!">{f.nome}</Link>
          </Item>
        ))}
      </List>
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
