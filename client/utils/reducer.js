import { Type } from "./action.type";

export const InitialState = {
  basket: [],
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_CART:
      return {
        ...state,
        basket: [...state.basket, { ...action.item }],
      };

    case Type.REMOVE_FROM_CART:
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.item.id),
      };
    default:
      return state;
  }
};
