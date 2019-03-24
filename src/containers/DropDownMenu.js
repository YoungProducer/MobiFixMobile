import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { togglePhonesListState, changeSelectedPhone } from '../store/DropDownMenu/actions'

import DropDownMenu from '../components/DropDownMenu'

const putStateToProps = (state) => {
    return {
        burgerState: state.burgerStateReducer.active,
        phonesListState: state.burgerStateReducer.phonesListState,
        selectedPhone: state.burgerStateReducer.selectedPhone
    }
}

const putDispatchToProps = (dispatch) => {
    return {
        onTogglePhonesListState: bindActionCreators(togglePhonesListState, dispatch),
        onChangeSelectedPhone: bindActionCreators(changeSelectedPhone, dispatch)
    }
}

export default connect(
    putStateToProps,
    putDispatchToProps
)(DropDownMenu)