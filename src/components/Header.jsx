import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import {
  paddingHeader,
  bgColor,
  borderColor,
  heightHeader,
  actionColor,
  sizeIconAction,
  fontSizeTitleHeader,
  marginTitleHeader,
} from '../utils/constants';

const Container = styled.header`
  position: fixed;
  top: 0;
  height: ${heightHeader};
  width: 100%;
  padding: ${paddingHeader};
  margin: 0 auto;
  background-color: ${bgColor};
  border-bottom: solid 1px ${borderColor};
  box-sizing: border-box;
  z-index: 1;
`;

const HeaderButton = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${actionColor};
  text-decoration: none;
  line-height: 1;
  cursor: pointer;
`;

const HeaderTitle = styled.h1`
  font-size: ${fontSizeTitleHeader};
  text-align: center;
  margin: ${marginTitleHeader};
`;

const HeaderDescription = styled.p`
  text-align: center;
  margin: 0;
  line-height: 1;
`;

function Header({ action, title, description }) {
  return (
    <Container>
      <HeaderButton onClick={action.handleClick}>
        <IoIosArrowBack size={sizeIconAction} />
        {action.label}
      </HeaderButton>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderDescription>{description}</HeaderDescription>
    </Container>
  );
}

Header.defaultProps = {
  description: '',
};

Header.propTypes = {
  action: PropTypes.shape({
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Header;
