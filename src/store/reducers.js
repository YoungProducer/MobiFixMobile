import { combineReducers } from 'redux'

import burgerStateReducer from './DropDownMenu/reducers'
import pushUpNotificationReducer from './PushUpNotification/reducers'
import { servicesListReducer, totalPriceReducer } from './ServicesList/reducers'
import { feedsModalWindowReducer } from './FeedModal/reducers'
import {
  servicesListReducer,
  totalPriceReducer,
  switcherStateReducer
} from './ServicesList/reducers'

const rootReducer = combineReducers({
    pushUpNotificationReducer,
    burgerStateReducer,
    servicesListReducer,
    totalPriceReducer,
    swithcerStateReducer,
    feedsModalWindowReducer
})


export default rootReducer
