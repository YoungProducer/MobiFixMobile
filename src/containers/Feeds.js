import { connect } from 'react-redux'

import Feeds from '../components/Feeds'

const putStateToProps = (state) => {
    return {
        fmVisible: state.feedsModalWindowReducer.feedsModalVisible,
    }
}

export default connect(
    putStateToProps,
    null
)(Feeds)