import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from './constants';

const State = [];

export const cart = (state = State, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      let updated = false;
      const newState = state.map(item => {
        if (item.name === payload.name && item.color === payload.color) {
          updated = true;
          return {
            ...item,
            counter: item.counter + 1
          };
        }
        return item;
      });

      return !updated
        ? state.concat({
            id: String(Date.now()),
            name: payload.name,
            phone: payload.phone,
            color: payload.color,
            colorName: payload.colorName,
            price: payload.price,
            counter: 1
          })
        : newState;
    case UPDATE_CART:
      return state.map(item => {
        if (item.id === payload.id && payload.counter > 0) {
          return {
            ...item,
            counter: payload.counter
          };
        }
        return item;
      });
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
};
