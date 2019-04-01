import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { 
    togglePhonesListState, 
    changeSelectedPhone, 
} from '../store/DropDownMenu/actions'

import {
    nullifyServices,
    nullifyPrice
} from '../store/ServicesList/actions'

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
        onChangeSelectedPhone: bindActionCreators(changeSelectedPhone, dispatch),
        onNullifyServices: bindActionCreators(nullifyServices, dispatch),
        onNullifyPrice: bindActionCreators(nullifyPrice, dispatch)
    }
}

export default connect(
    putStateToProps,
    putDispatchToProps
)(DropDownMenu)