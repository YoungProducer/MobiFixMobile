import { combineReducers } from 'redux'

import burgerStateReducer from './DropDownMenu/reducers'
import pushUpNotificationReducer from './PushUpNotification/reducers'
import { servicesListReducer, totalPriceReducer } from './ServicesList/reducers'

const rootReducer = combineReducers({
    pushUpNotificationReducer,
    burgerStateReducer,
    servicesListReducer,
    totalPriceReducer
})

export default rootReducer
