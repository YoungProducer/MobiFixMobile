import { OPEN_CART_MODAL, CLOSE_CART_MODAL } from './constants'

const State = {
  visible: false
}

export const cartModalReducer = (state = State, { type, payload }) => {
  switch (type) {
    case OPEN_CART_MODAL:
      return {
        visible: true
      }
    case CLOSE_CART_MODAL:
      return {
        visible: false
      }
    default:
      return state
  }
}
