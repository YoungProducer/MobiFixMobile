import './actions'
import { TOGGLE_BURGER_STATE } from './constants';

const initialState = {
    active: false
}

const burgerStateReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_BURGER_STATE:
            return { ...state, active: action.payload}
        default: 
            return state
    }
}

export default burgerStateReducer