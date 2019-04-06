import {
    OPEN_FEEDS_MODAL_WINDOW,
    CLOSE_FEEDS_MODAL_WINDOW
} from './constants'

const initialState = {
    feedsModalVisible: false,
    header: '',
    image: '',
    text: '',
    date: ''
}

export const feedsModalWindowReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_FEEDS_MODAL_WINDOW: 
            return { 
                ...state, 
                feedsModalVisible: true,
                header: action.payload.header,
                image: action.payload.image,
                text: action.payload.text,
                date: action.payload.date
            }

        case CLOSE_FEEDS_MODAL_WINDOW: 
            return { 
                ...state, 
                feedsModalVisible: false
            }

        default:
            return state
    }
}