import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import header from '../assets/header.jpg';

const Main = styled.main`
  display: flex;
  align-items: flex-end;
  height: 100vh;
  background-color: #f1f1f1;
  background-image: url(${header});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
`;

const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;
  padding: 1rem;
  box-sizing: border-box;
`;

const Title = styled.h1`
  color: #007aff;
  text-align: center;
  margin: 0;
`;

const Description = styled.p`
  text-align: center;
  margin: 0.5rem 1rem 2rem 1rem;
`;

const Button = styled(Link)`
  width: 100%;
  max-width: 320px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #007aff;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

function Home() {
  return (
    <>
      <Main>
        <CallToAction>
          <Title>Alimentômetro</Title>
          <Description>Saiba quanto rende um alimento para não errar na sua dieta.</Description>
          <Button to="/foods">Alimentos</Button>
        </CallToAction>
      </Main>
    </>
  );
}

export default Home;
