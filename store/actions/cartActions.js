import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from "../actions/types";

export const addItemToCart = (newItem) => ({
  type: ADD_TO_CART,
  payload: newItem,
});

export const removeItemFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

export const checkout = () => ({
  type: CHECKOUT,
});
