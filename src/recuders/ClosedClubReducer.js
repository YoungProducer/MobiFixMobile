import { CHANGE_FIRST_NAME, CHANGE_PHONE_NUMBER } from '../constants/ClosedClubConstants'

const initialState = {
    firstName: '',
    phoneNumber: ''
}

const closedClubReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_FIRST_NAME: 
            return { ...state, firstName: action.payload}

        case CHANGE_PHONE_NUMBER: 
            return { ...state, phoneNumber: action.payload}

        default: 
            return state
    }
}

export default closedClubReducer