import { connect } from 'react-redux'

import PushUpNotification from '../components/PushUpNotification'

const putStateToProps = (state) => {
    return {
        visible: state.pushUpNotificationReducer.pushUpNotificationVisible
    }
}

export default connect(
    putStateToProps,
    null
)(PushUpNotification)