import { combineReducers } from 'redux'

import burgerStateReducer from './DropDownMenu/reducers'
import pushUpNotificationReducer from './PushUpNotification/reducers'
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
  switcherStateReducer
})

export default rootReducer
