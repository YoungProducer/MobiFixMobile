import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { 
    togglePushUpNotificationState,
    showPushUpNotification,
    hidePushUpNotification 
} from '../store/PushUpNotification/actions'

import ClosedClub from '../components/ClosedClub'

const putDispatchToProps = (dispatch) => {
    return {
        onTogglePushNotificationState: bindActionCreators(togglePushUpNotificationState, dispatch),
        onShowPushUpNotification: bindActionCreators(showPushUpNotification, dispatch),
        onHidePushUpNotification: bindActionCreators(hidePushUpNotification, dispatch)
    }
}

export default connect(
    null,
    putDispatchToProps
)(ClosedClub)