import { LIST_FOODS, SELECT_FOOD } from './types';

export const listFoods = () => ({
  type: LIST_FOODS,
});

export const selectFood = id => ({
  type: SELECT_FOOD,
  payload: { id },
});
