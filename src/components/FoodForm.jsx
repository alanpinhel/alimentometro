import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';

const Toolbar = styled.header`
  position: fixed;
  top: 0;
  height: 110px;
  width: 100%;
  padding: 0.5rem;
  background-color: #f8f8f8;
  border-bottom: solid 1px #e0e0e0;
  box-sizing: border-box;
  z-index: 1;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  color: #007aff;
  text-decoration: none;
  line-height: 1;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  text-align: center;
  margin: 0.5rem;
`;

const Description = styled.p`
  text-align: center;
  margin: 0.5rem;
  line-height: 1;
`;

const Main = styled.main`
  position: absolute;
  top: 110px;
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

const Resultbar = styled.footer`
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
      <Toolbar>
        <ActionButton href="#!">
          <IoIosArrowBack size="1.5rem" />
          Alimentos
        </ActionButton>

        <Title>Arroz Integral</Title>

        <Description>Quanto você precisa consumir?</Description>
      </Toolbar>

      <Main>
        <input type="range" />
      </Main>

      <Resultbar>
        <Result>
          Prepare
          <b> 1,5kg </b>
          de Arroz Integral
        </Result>
      </Resultbar>
    </>
  );
}

export default FoodForm;
