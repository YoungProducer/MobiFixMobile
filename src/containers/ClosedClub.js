import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { togglePushUpNotificationState } from '../store/PushUpNotification/actions'

import ClosedClub from '../components/ClosedClub'

const putDispatchToProps = (dispatch) => {
    return {
        onTogglePushNotificationState: bindActionCreators(togglePushUpNotificationState, dispatch)
    }
}

export default connect(
    null,
    putDispatchToProps
)(ClosedClub)