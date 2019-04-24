import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Accessory from '../components/Accessory';

import { onOpenAccessoryModal } from '../store/AccessoryModal/actions';
import {
  showPushUpNotification,
  hidePushUpNotification
} from '../store/PushUpNotification/actions';

const putDispatchToProps = dispatch => {
  return {
    openAccessoryModal: bindActionCreators(onOpenAccessoryModal, dispatch),
    onShowUpNotification: bindActionCreators(showPushUpNotification, dispatch),
    onHideUpNotification: bindActionCreators(hidePushUpNotification, dispatch)
  };
};

export default connect(
  null,
  putDispatchToProps
)(Accessory);
