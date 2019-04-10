import { OPEN_ACCESSORY_MODAL, CLOSE_ACCESSORY_MODAL } from './constants'

const State = {
  visible: false,
  title: '',
  images: [[]],
  phone: '',
  price: '',
  colors: [[]],
  haveColors: ''
}

export const accessoryModalReducer = (state = State, { type, payload }) => {
  switch (type) {
    case OPEN_ACCESSORY_MODAL:
      return {
        visible: true,
        title: payload.title,
        images: payload.images,
        phone: payload.phone,
        price: payload.price,
        colors: payload.colors,
        haveColors: payload.haveColors
      }
    case CLOSE_ACCESSORY_MODAL:
      return {
        ...state,
        visible: false
      }
    default:
      return state
  }
}
