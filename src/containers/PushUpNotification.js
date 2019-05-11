import { connect } from 'react-redux'

import PushUpNotification from '../components/PushUpNotification'

const putStateToProps = (state) => {
    return {
        visible: state.pushUpNotificationReducer.pushUpNotificationVisible,
        message: state.pushUpNotificationReducer.message
    }
}

export default connect(
    putStateToProps,
    null
)(PushUpNotification)