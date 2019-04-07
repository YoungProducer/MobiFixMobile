import { 
    TOGGLE_PUSH_UP_NOTIFICATION_STATE,
    SHOW_PUSH_UP_NOTIFICATION,
    HIDE_PUSH_UP_NOTIFICATION 
} from './constants';

const initialState = {
    pushUpNotificationVisible: false,
    message: ''
}

const pushUpNotificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PUSH_UP_NOTIFICATION_STATE: 
            return { 
                ...state, 
                pushUpNotificationVisible: action.payload
            }

        case SHOW_PUSH_UP_NOTIFICATION: 
            return {
                ...state,
                pushUpNotificationVisible: true,
                message: action.payload || 'Надіслано'
            }

        case HIDE_PUSH_UP_NOTIFICATION: 
            return {
                ...state,
                pushUpNotificationVisible: false,
                message: ''
            }

        default: 
            return state
    }
}

export default pushUpNotificationReducer