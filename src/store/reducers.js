import { combineReducers } from 'redux'

import burgerStateReducer from './DropDownMenu/reducers'
import pushUpNotificationReducer from './PushUpNotification/reducers'
import { servicesListReducer, totalPriceReducer, switcherStateReducer } from './ServicesList/reducers'
import { feedsModalWindowReducer } from './FeedModal/reducers'

const rootReducer = combineReducers({
    pushUpNotificationReducer,
    burgerStateReducer,
    servicesListReducer,
    totalPriceReducer,
    switcherStateReducer,
    feedsModalWindowReducer
})


export default rootReducer
