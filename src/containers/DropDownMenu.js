import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import DropDownMenu from '../components/DropDownMenu'

const putStateToProps = (state) => {
    return {
        burgerState: state.active
    }
}

export default connect(
    putStateToProps,
    null
)(DropDownMenu)