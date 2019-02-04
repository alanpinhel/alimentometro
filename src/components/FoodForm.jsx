import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import aw from 'alimentometro-wrapper';
import Header from './Header';
import { heightHeader } from '../utils/constants';

const Main = styled.main`
  position: absolute;
  top: ${heightHeader};
  height: calc(100vh - ${heightHeader} - 80px);
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
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

let teste;

const { Handle } = Slider;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  teste = value;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={aw.formata(value)}
      visible
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

function FoodForm({ food }) {
  const da = React.createRef();
  return (
    <>
      <Header
        action={{ label: 'Alimentos', handleClick: () => {} }}
        title={food.nome}
        description="Quanto você precisa consumir?"
      />

      <Main>
        <Slider ref={da} min={0} max={10000} defaultValue={100} step={100} handle={handle} />
      </Main>

      <Footer>
        <Result>
          Prepare
          <b>{` ${aw.formata(food.pesoBruto * teste)} `}</b>
          de
          {food.nome}
        </Result>
      </Footer>
    </>
  );
}

export default FoodForm;
