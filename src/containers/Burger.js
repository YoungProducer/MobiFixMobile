import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { toggleBurgerState } from '../store/DropDownMenu/actions'
import Burger from '../components/Burger'

const putDispatchToProps = (dispatch) => {
    return {
        onToggleBurgerState: bindActionCreators(toggleBurgerState, dispatch)
    }
}

const putStateToProps = (state) => {
    return {
        active: state.burgerStateReducer.active
    }
}

export default connect (
    putStateToProps, 
    putDispatchToProps
)(Burger)
