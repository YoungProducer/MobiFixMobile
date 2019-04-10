import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Cart from '../components/Cart'
import { onOpenCartModal } from '../store/CartModal/actions'

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => {
  return {
    openCartModal: bindActionCreators(onOpenCartModal, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
