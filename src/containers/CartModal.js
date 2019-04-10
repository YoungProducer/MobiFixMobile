import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CartModal from '../components/CartModal'

import { onCloseCartModal } from '../store/CartModal/actions'

const putStateToProps = state => {
  return {
    visible: state.cartModalReducer.visible,
    cart: state.cart
  }
}

const putDispatchToProps = dispatch => {
  return {
    closeCartModal: bindActionCreators(onCloseCartModal, dispatch)
  }
}

export default connect(
  putStateToProps,
  putDispatchToProps
)(CartModal)
