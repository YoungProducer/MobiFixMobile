import { CHANGE_FIRST_NAME, CHANGE_PHONE_NUMBER } from '../actions/ClosedClubActions'

export const changeFirstName = (firstName) => ({
    type: CHANGE_FIRST_NAME,
    payload: firstName
})

export const changePhoneNumber = (phoneNumber) => ({
    type: CHANGE_PHONE_NUMBER,
    payload: phoneNumber
})