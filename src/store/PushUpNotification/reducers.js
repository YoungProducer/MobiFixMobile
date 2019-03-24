import { TOGGLE_PUSH_UP_NOTIFICATION_STATE } from './constants';

const initialState = {
    pushUpNotificationVisible: false
}

const pushUpNotificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PUSH_UP_NOTIFICATION_STATE: 
            return { 
                ...state, 
                pushUpNotificationVisible: action.payload
            }

        default: 
            return state
    }
}

export default pushUpNotificationReducer