import './actions'
import { 
    TOGGLE_BURGER_STATE, 
    TOGGLE_PHONES_LIST_STATE,
    CHANGE_SELECTED_PHONE
} from './constants';

const initialBurgerState = {
    active: false,
    phonesListState: false,
    selectedPhone: ''
}

const burgerStateReducer = (state = initialBurgerState, action) => {
    switch(action.type) {
        case TOGGLE_BURGER_STATE:
            if (!state.phonesListState)
                return { ...state, active: action.payload}

            if (state.phonesListState) 
                return { ...state, active: action.payload, phonesListState: false}

        case TOGGLE_PHONES_LIST_STATE:
            return { ...state, phonesListState: action.payload}

        case CHANGE_SELECTED_PHONE:
            return { ...state, selectedPhone: action.payload}

        default: 
            return state
    }
}

export default burgerStateReducer