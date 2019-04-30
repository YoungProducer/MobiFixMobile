import { OPEN_ACCESSORY_MODAL, CLOSE_ACCESSORY_MODAL } from './constants';

export const onOpenAccessoryModal = (title, phone, price, images, stock) => ({
  type: OPEN_ACCESSORY_MODAL,
  payload: { title, phone, price, images, stock }
});

export const onCloseAccessoryModal = () => ({
  type: CLOSE_ACCESSORY_MODAL
});
