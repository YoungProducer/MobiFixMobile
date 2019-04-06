import {
    OPEN_FEEDS_MODAL_WINDOW,
    CLOSE_FEEDS_MODAL_WINDOW
} from './constants'

export const openFeedsModalWindow = (header, image, text, date) => ({
    type: OPEN_FEEDS_MODAL_WINDOW,
    payload: { header, image, text, date }
})

export const closeFeedsModalWindow = () => ({
    type: CLOSE_FEEDS_MODAL_WINDOW
})