import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from './constants';

export const addToCart = (name, phone, color, colorName, price) => ({
  type: ADD_TO_CART,
  payload: {
    name,
    phone,
    color,
    colorName,
    price
  }
});

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: { id }
});

export const updateCartItem = (id, counter) => ({
  type: UPDATE_CART,
  payload: { id, counter }
});
