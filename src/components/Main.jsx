import React from 'react';
import styled from 'styled-components';
import { heightHeader } from '../utils/constants';

const Container = styled.main`
  position: absolute;
  top: ${heightHeader};
  width: 100%;
`;

function Main({ children }) {
  return <Container>{children}</Container>;
}

export default Main;
