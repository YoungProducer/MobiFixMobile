import { OPEN_CART_MODAL, CLOSE_CART_MODAL } from './constants'

export const onOpenCartModal = (title, phone, price, color) => ({
  type: OPEN_CART_MODAL,
  payload: { title, phone, price, color }
})

export const onCloseCartModal = () => ({
  type: CLOSE_CART_MODAL
})
