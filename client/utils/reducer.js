import { Type } from "./action.type";

export const InitialState = {
  basket: [],
  user:[]
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
    case Type.SET_USER:
      return{
        ...state,
        user: action.user
      }
    case Type.EMPTY_BASKET:
      return{
        ...state,
        basket:[]
      }
    default:
      return state;
  }
};
