import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Switcher from '../components/Switcher'

import {
  addService,
  removeService,
  addPrice,
  subtractPrice
} from '../store/ServicesList/actions'

const putDispatchToPros = dispatch => {
  return {
    onAddService: bindActionCreators(addService, dispatch),
    onRemoveService: bindActionCreators(removeService, dispatch),
    onAddPrice: bindActionCreators(addPrice, dispatch),
    onSubtractPrice: bindActionCreators(subtractPrice, dispatch)
  }
}

export default connect(
  null,
  putDispatchToPros
)(Switcher)
