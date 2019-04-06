import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import StatementSender from '../components/StatementSender'

import { togglePushUpNotificationState } from '../store/PushUpNotification/actions'
import {
  nullifyServices,
  nullifyPrice,
  toggleSwitchers
} from '../store/ServicesList/actions'

const putStateToProps = state => {
  return {
    services: state.servicesListReducer.services,
    price: state.totalPriceReducer.totalPrice
  }
}

const putDispatchToProps = dispatch => {
  return {
    onTogglePushUpNotification: bindActionCreators(
      togglePushUpNotificationState,
      dispatch
    ),
    onNullifyServices: bindActionCreators(nullifyServices, dispatch),
    onNullifyPrice: bindActionCreators(nullifyPrice, dispatch),
    onToggleSwitchers: bindActionCreators(toggleSwitchers, dispatch)
  }
}

export default connect(
  putStateToProps,
  putDispatchToProps
)(StatementSender)
