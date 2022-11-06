import {LOGIN_GOOGLE, USER_NAME, USER_PASSWORD} from '../constants/CustomerType'

export const GoogleLogin = (value) => {
    return {
        type: LOGIN_GOOGLE,
        payload: value
    }
}

export const inpUserName = (value) => {
    return {
        type: USER_NAME,
        payload: value
    }
}

export const inpPasswordd = (value) => {
    return {
        type: USER_PASSWORD,
        payload: value
    }
}