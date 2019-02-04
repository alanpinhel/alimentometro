import { CALCULATE_FOOD } from './types';

// eslint-disable-next-line import/prefer-default-export
export const calculateFood = id => ({
  type: CALCULATE_FOOD,
  payload: {
    id,
  },
});
