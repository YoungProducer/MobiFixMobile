import { 
    TOGGLE_BURGER_STATE,
    TOGGLE_PHONES_LIST_STATE
} from './constants'

export const toggleBurgerState = (burgerState) => ({
    type: TOGGLE_BURGER_STATE,
    payload: burgerState
})

export const togglePhonesListState = (phonesListState) => ({
    type: TOGGLE_PHONES_LIST_STATE,
    payload: phonesListState
})