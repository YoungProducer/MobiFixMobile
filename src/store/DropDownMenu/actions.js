import { 
    TOGGLE_BURGER_STATE } 
    from './constants'

export const toggleBurgerState = (burgerState) => ({
    type: TOGGLE_BURGER_STATE,
    payload: burgerState
})

