import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Accessory from '../components/Accessory'

import { onOpenAccessoryModal } from '../store/AccessoryModal/actions'

const putDispatchToProps = dispatch => {
  return {
    openAccessoryModal: bindActionCreators(onOpenAccessoryModal, dispatch)
  }
}

export default connect(
  null,
  putDispatchToProps
)(Accessory)
