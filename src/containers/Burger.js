import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { toggleBurgerState } from '../store/DropDownMenu/actions'
import Burger from '../components/Burger'

const putDispatchToProps = (dispatch) => {
    return {
        onToggleBurgerState: bindActionCreators(toggleBurgerState, dispatch)
    }
}

export default connect (
    null, 
    putDispatchToProps
)(Burger)
