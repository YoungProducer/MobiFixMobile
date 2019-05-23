import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import About from '../components/About'

import { togglePhonesListState } from '../store/DropDownMenu/actions'

const putDispatchToProps = (dispatch) => ({
    onTogglePhonesListState: bindActionCreators(togglePhonesListState, dispatch)
})

export default connect(
    null,
    putDispatchToProps
)(About)