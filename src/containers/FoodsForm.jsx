import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import aw from 'alimentometro-wrapper';
import SliderWeight from '../components/SliderWeight';
import { selectFood } from '../actions';

const Header = styled.header`
  position: sticky;
  top: 0;
  padding: 0.5rem;
  background-color: #f8f8f8;
  border-bottom: solid 1px #e0e0e0;
  box-sizing: border-box;
  z-index: 1;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #007aff;
  text-decoration: none;
  line-height: 1;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
`;

const Description = styled.p`
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0;
  line-height: 1;
`;

const Main = styled.main`
  padding: 2.5rem;
  box-sizing: border-box;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.5rem;
  background-color: #f8f8f8;
  border-top: solid 1px #e0e0e0;
  box-sizing: border-box;
  z-index: 1;
`;

const Output = styled.p`
  text-align: center;
  margin: 0;
`;

class FoodsForm extends React.PureComponent {
  state = {
    output: '0g',
  };

  async componentDidMount() {
    const { handleSelect, match } = this.props;
    handleSelect(match.params.id);
  }

  handleCalculate = value => {
    const { item } = this.props;
    this.setState({
      output: aw.formata(item.pesoBruto * value),
    });
  };

  render() {
    const { item } = this.props;
    const { output } = this.state;
    return (
      <>
        <Header>
          <BackLink to="/foods">
            <IoIosArrowBack size="1.5rem" />
            Alimentos
          </BackLink>
          <Title>{item.nome}</Title>
          <Description>Quanto você precisa consumir?</Description>
        </Header>

        <Main>
          <SliderWeight
            handleFormat={value => aw.formata(value)}
            handleChange={this.handleCalculate}
          />
        </Main>

        <Footer>
          <Output>
            Prepare
            <b>{` ${output} `}</b>
            de
            {` ${item.nome}.`}
          </Output>
        </Footer>
      </>
    );
  }
}

FoodsForm.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    nome: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
  handleSelect: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    item: state.foods.item,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSelect: id => dispatch(selectFood(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodsForm);
