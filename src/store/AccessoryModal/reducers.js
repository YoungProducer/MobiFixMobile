import { OPEN_ACCESSORY_MODAL, CLOSE_ACCESSORY_MODAL } from './constants';

const State = {
  visible: false,
  title: '',
  images: [
    {
      color: { id: 2, name: 'Зелений', hex: '#008000' },
      urls: ['https://bobandsuewilliams.com/images/wall-7.jpg']
    }
  ],
  phone: '',
  price: ''
};

export const accessoryModalReducer = (state = State, { type, payload }) => {
  switch (type) {
    case OPEN_ACCESSORY_MODAL:
      return {
        visible: true,
        title: payload.title,
        images: payload.images,
        phone: payload.phone,
        price: payload.price,
        stock: payload.stock
      };
    case CLOSE_ACCESSORY_MODAL:
      return {
        ...state,
        visible: false
      };
    default:
      return state;
  }
};
