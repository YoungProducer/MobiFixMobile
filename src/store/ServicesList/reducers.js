import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  ADD_PRICE,
  SUBTRACT_PRICE
} from './constants'

const svInitialState = {
  services: []
}

export const servicesListReducer = (state = svInitialState, action) => {
  switch (action.type) {
    case ADD_SERVICE:
      return { services: [...state.services, [action.payload.name, action.payload.price]] }

    case REMOVE_SERVICE:
      let index = state.services.findIndex(service => {
        return service[0] === action.payload.name
      })
      if (index > -1) state.services.splice(index, 1)

      return state
      
    default:
      return state
  }
}

const tpInitialState = {
  totalPrice: 0
}

export const totalPriceReducer = (state = tpInitialState, action) => {
  switch (action.type) {
    case ADD_PRICE:
      return { totalPrice: parseInt(action.payload, 10) + parseInt(state.totalPrice, 10)}
      
    case SUBTRACT_PRICE:
      return { totalPrice: parseInt(state.totalPrice, 10) - parseInt(action.payload, 10) }

    default:
      return state
  }
}
