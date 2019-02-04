import { combineReducers } from 'redux';
import aw from 'alimentometro-wrapper';

const initialState = aw.getAlimentos();

function foods(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  foods,
});
