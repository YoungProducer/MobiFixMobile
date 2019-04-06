import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import FeedModal from '../components/FeedModal'

import {
    closeFeedsModalWindow
} from '../store/FeedModal/actions'

const putStateToProps = (state) => {
    return {
        fmVisible: state.feedsModalWindowReducer.feedsModalVisible,
        feedHeader: state.feedsModalWindowReducer.header,
        feedImage: state.feedsModalWindowReducer.image,
        feedText: state.feedsModalWindowReducer.text,
        feedDate: state.feedsModalWindowReducer.date
    }
}

const putDispatchToProps = (dispatch) => {
    return {
        onCloseFeedsModalWindow: bindActionCreators(closeFeedsModalWindow, dispatch)
    }
}

export default connect(
    putStateToProps,
    putDispatchToProps
)(FeedModal)