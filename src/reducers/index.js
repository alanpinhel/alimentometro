import { combineReducers } from 'redux';
import aw from 'alimentometro-wrapper';
import { LIST_FOODS, SELECT_FOOD } from '../actions/types';

const initialState = {
  list: aw.getAlimentos(),
  item: {},
};

function foods(state = initialState, action) {
  switch (action.type) {
    case LIST_FOODS:
      return { ...state, list: aw.getAlimentos() };
    case SELECT_FOOD:
      return { ...state, item: state.list.find(f => f.id === +action.payload.id) };
    default:
      return state;
  }
}

export default combineReducers({
  foods,
});
