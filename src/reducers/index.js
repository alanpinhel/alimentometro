import { CALCULATE_FOOD } from '../actions/types';

export default function foodsReducer(state = [], action) {
  switch (action.type) {
    case CALCULATE_FOOD:
      return state;
    default:
      return state;
  }
}
