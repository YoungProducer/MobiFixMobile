import {
    TOGGLE_PUSH_UP_NOTIFICATION_STATE
} from './constants'

export const togglePushUpNotificationState = (notificationState) => ({
    type: TOGGLE_PUSH_UP_NOTIFICATION_STATE,
    payload: notificationState
})