import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import {
  paddingHeader,
  bgColor,
  borderColor,
  actionColor,
  fontSizeTitleHeader,
  marginTitleHeader,
} from '../utils/constants';

const heightHeader = '125px';

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

const Description = styled.p`
  text-align: center;
  margin: 0;
  line-height: 1;
`;

const Main = styled.main`
  position: absolute;
  top: ${heightHeader};
  height: calc(100vh - 110px - 80px);
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
`;

const Result = styled.p`
  text-align: center;
  margin: 0.5rem;
  line-height: 1;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
  width: 100%;
  padding: 0.5rem;
  background-color: #f8f8f8;
  border-top: solid 1px #e0e0e0;
  box-sizing: border-box;
  z-index: 1;
`;

function FoodForm() {
  return (
    <>
      <Header>
        <ActionButton href="#!">
          <IoIosArrowBack size="1.5rem" />
          Alimentos
        </ActionButton>

        <Title>Arroz Integral</Title>

        <Description>Quanto você precisa consumir?</Description>
      </Header>

      <Main>
        <input type="range" />
      </Main>

      <Footer>
        <Result>
          Prepare
          <b> 1,5kg </b>
          de Arroz Integral
        </Result>
      </Footer>
    </>
  );
}

export default FoodForm;
