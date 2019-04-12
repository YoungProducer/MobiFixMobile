import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Confirmation from '../components/Confirmation'
import { togglePushUpNotificationState } from '../store/PushUpNotification/actions'
import { onOpenCartModal } from '../store/CartModal/actions'

const mapStateToProps = state => ({
  cart: state.cart
})

const mapActionToProps = dispatch => ({
  pushUpNotification: bindActionCreators(
    togglePushUpNotificationState,
    dispatch
  )
})

export default connect(
  mapStateToProps,
  mapActionToProps
)(Confirmation)
