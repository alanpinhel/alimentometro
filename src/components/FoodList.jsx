import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import {
  bgColor,
  borderColor,
  actionColor,
  paddingHeader,
  fontSizeTitleHeader,
  sizeIconAction,
  marginTitleHeader,
} from '../utils/constants';

const heightHeader = '100px';

const Header = styled.header`
  position: fixed;
  top: 0;
  height: ${heightHeader};
  width: 100%;
  padding: ${paddingHeader};
  background-color: ${bgColor};
  border-bottom: solid 1px ${borderColor};
  box-sizing: border-box;
  z-index: 1;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${actionColor};
  text-decoration: none;
  line-height: 1;
`;

const Title = styled.h1`
  font-size: ${fontSizeTitleHeader};
  text-align: center;
  margin: ${marginTitleHeader};
`;

const Main = styled.main`
  position: absolute;
  top: ${heightHeader};
  width: 100%;
`;

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

const Link = styled.a`
  display: block;
  line-height: 1;
  color: #000;
  text-decoration: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

function FoodList({ foods }) {
  return (
    <>
      <Header>
        <ActionButton href="#!">
          <IoIosArrowBack size={sizeIconAction} />
          Tela Inicial
        </ActionButton>
        <Title>Alimentos</Title>
      </Header>

      <Main>
        <List>
          {foods.map(f => (
            <Item key={f.id}>
              <Link href="#!">{f.nome}</Link>
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
