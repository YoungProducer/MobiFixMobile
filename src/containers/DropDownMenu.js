import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { togglePhonesListState } from '../store/DropDownMenu/actions'

import DropDownMenu from '../components/DropDownMenu'

const putStateToProps = (state) => {
    return {
        burgerState: state.active,
        phonesListState: state.phonesListState
    }
}

const putDispatchToProps = (dispatch) => {
    return {
        onTogglePhonesListState: bindActionCreators(togglePhonesListState, dispatch)
    }
}

export default connect(
    putStateToProps,
    putDispatchToProps
)(DropDownMenu)