import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { listFoods } from '../actions';

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
  margin: 0rem;
`;

const Main = styled.main`
  width: 100%;
  overflow-y: auto;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 0.5rem;
  list-style: none;
`;

const Item = styled.li`
  &:not(:last-child) a {
    border-bottom: 1px solid #e0e0e0;
  }
`;

const FoodButton = styled(Link)`
  display: block;
  color: #000;
  line-height: 1;
  text-decoration: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

class FoodsList extends React.PureComponent {
  componentDidMount() {
    const { handleList } = this.props;
    handleList();
  }

  render() {
    const { list } = this.props;
    return (
      <>
        <Header>
          <BackLink to="/">
            <IoIosArrowBack size="1.5rem" />
            Tela Inicial
          </BackLink>
          <Title>Alimentos</Title>
        </Header>

        <Main>
          <List>
            {list.map(f => (
              <Item key={f.id}>
                <FoodButton to={`/foods/${f.id}`}>{f.nome}</FoodButton>
              </Item>
            ))}
          </List>
        </Main>
      </>
    );
  }
}

FoodsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nome: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleList: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    list: state.foods.list,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleList: () => dispatch(listFoods()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodsList);
