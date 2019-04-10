import { combineReducers } from 'redux'

import burgerStateReducer from './DropDownMenu/reducers'
import pushUpNotificationReducer from './PushUpNotification/reducers'
import {
  servicesListReducer,
  totalPriceReducer,
  switcherStateReducer
} from './ServicesList/reducers'
import { feedsModalWindowReducer } from './FeedModal/reducers'
import { accessoryModalReducer } from './AccessoryModal/reducers'
import { cartModalReducer } from './CartModal/reducers'
import { cart } from './Cart/reducer'

const rootReducer = combineReducers({
  pushUpNotificationReducer,
  burgerStateReducer,
  servicesListReducer,
  totalPriceReducer,
  switcherStateReducer,
  feedsModalWindowReducer,
  accessoryModalReducer,
  cartModalReducer,
  cart
})

export default rootReducer
