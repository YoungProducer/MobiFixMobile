import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Item from '../components/CartItem'

import { removeFromCart, updateCartItem } from '../store/Cart/action'

const putDispatchToProps = dispatch => ({
  onRemoveProduct: bindActionCreators(removeFromCart, dispatch),
  onUpdateCart: bindActionCreators(updateCartItem, dispatch)
})

export default connect(
  null,
  putDispatchToProps
)(Item)
