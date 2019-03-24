import { combineReducers } from 'redux'

import burgerStateReducer from './DropDownMenu/reducers'
import pushUpNotificationReducer from './PushUpNotification/reducers'

const rootReducer = combineReducers({
    pushUpNotificationReducer,
    burgerStateReducer,
})

export default rootReducer
