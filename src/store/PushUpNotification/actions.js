import {
    TOGGLE_PUSH_UP_NOTIFICATION_STATE,
    SHOW_PUSH_UP_NOTIFICATION,
    HIDE_PUSH_UP_NOTIFICATION
} from './constants'

export const togglePushUpNotificationState = (notificationState) => ({
    type: TOGGLE_PUSH_UP_NOTIFICATION_STATE,
    payload: notificationState
})

export const showPushUpNotification = (message) => ({
    type: SHOW_PUSH_UP_NOTIFICATION,
    payload: message
})

export const hidePushUpNotification = () => ({
    type: HIDE_PUSH_UP_NOTIFICATION,
})