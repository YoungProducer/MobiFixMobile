import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addToCart } from '../store/Cart/action'
import { togglePushUpNotificationState } from '../store/PushUpNotification/actions'
import ItemModal from '../components/ItemModal'

const mapDispatchToProps = dispatch => ({
  onAddProduct: bindActionCreators(addToCart, dispatch),
  onTogglePushUpNotification: bindActionCreators(
    togglePushUpNotificationState,
    dispatch
  )
})

export default connect(
  null,
  mapDispatchToProps
)(ItemModal)
