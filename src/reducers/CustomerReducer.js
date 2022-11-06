import { LOGIN_GOOGLE, USER_NAME, USER_PASSWORD } from '../constants/CustomerType'

const initialState = {
    user: null,
    password: "",
    userName: ""
}

const CustomerReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_GOOGLE:
            return {
                ...state,
                user: action.payload
            }
        case USER_NAME:
            return {
                ...state,
                password: action.payload
            }
        case USER_PASSWORD:
            return {
                ...state,
                userName: action.payload
            }
        default:
            return state;
    }
}

export default CustomerReducer

