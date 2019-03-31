import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  ADD_PRICE,
  SUBTRACT_PRICE
} from './constants'

export const addService = (name, price) => ({
  type: ADD_SERVICE,
  payload: { name, price }
})

export const removeService = name => ({
  type: REMOVE_SERVICE,
  payload: { name }
})

export const addPrice = price => ({
  type: ADD_PRICE,
  payload: price
})

export const subtractPrice = price => ({
  type: SUBTRACT_PRICE,
  payload: price
})
