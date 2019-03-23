import './actions'
import { 
    TOGGLE_BURGER_STATE, 
    TOGGLE_PHONES_LIST_STATE 
} from './constants';

const initialState = {
    active: false,
    phonesListState: false
}

const burgerStateReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_BURGER_STATE:
            if (!state.phonesListState)
                return { ...state, active: action.payload}

            if (state.phonesListState) 
                return { ...state, active: action.payload, phonesListState: false}

        case TOGGLE_PHONES_LIST_STATE:
            return { ...state, phonesListState: action.payload}

        default: 
            return state
    }
}

export default burgerStateReducer