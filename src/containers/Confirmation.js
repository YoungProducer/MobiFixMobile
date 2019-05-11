import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Confirmation from '../components/Confirmation';
import {
  showPushUpNotification,
  hidePushUpNotification
} from '../store/PushUpNotification/actions';

const mapStateToProps = state => ({
  cart: state.cart
});

const mapActionToProps = dispatch => ({
  onShowPushUpNotification: bindActionCreators(showPushUpNotification, dispatch),
  onHidePushUpNotification: bindActionCreators(hidePushUpNotification, dispatch)
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(Confirmation);
