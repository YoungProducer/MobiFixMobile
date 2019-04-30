import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AccessoryModal from '../components/AccessoryModal';

import { togglePushUpNotificationState } from '../store/PushUpNotification/actions';
import { onCloseAccessoryModal } from '../store/AccessoryModal/actions';
import { addToCart } from '../store/Cart/action';

const putStateToProps = state => {
  return {
    visible: state.accessoryModalReducer.visible,
    images: state.accessoryModalReducer.images,
    title: state.accessoryModalReducer.title,
    phone: state.accessoryModalReducer.phone,
    price: state.accessoryModalReducer.price,
    stock: state.accessoryModalReducer.stock
  };
};

const putDispatchToProps = dispatch => {
  return {
    closeAccessoryModal: bindActionCreators(onCloseAccessoryModal, dispatch),
    addProduct: bindActionCreators(addToCart, dispatch),
    pushUpNotification: bindActionCreators(
      togglePushUpNotificationState,
      dispatch
    )
  };
};

export default connect(
  putStateToProps,
  putDispatchToProps
)(AccessoryModal);
