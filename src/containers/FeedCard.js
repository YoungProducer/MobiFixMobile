import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import FeedCard from '../components/FeedCard'

import { 
    openFeedsModalWindow
} from '../store/FeedModal/actions'

const putDispatchToProps = (dispatch) => {
    return {
        onOpenFeedsModalWindow: bindActionCreators(openFeedsModalWindow, dispatch)
    }
}

export default connect(
    null,
    putDispatchToProps
)(FeedCard)