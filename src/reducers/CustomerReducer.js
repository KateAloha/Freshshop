import {
    LOGIN_GOOGLE,
    USER_NAME,
    USER_PASSWORD,
    INP_FULLNAME,
    INP_PHONE,
    INP_EMAIL,
    INP_ADDRESS,
    INP_CITY,
    INP_COUNTRY,
    INP_PASSWORD,
    GET_CUSTOMER_DATA,
    CREATE_NEW_CUSTOMER
} from '../constants/CustomerType'

const initialState = {
    userGoogle: null,
    password: "",
    userName: "",
    fullNameSignUp: "",
    phoneSignUp: "",
    emailSignUp: "",
    addressSignUp: "",
    citySignUp: "",
    coutrySignUp: "",
    passwordSignUp: "",
    newCustomer: [],
    customerData: []

}

const CustomerReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_GOOGLE:
            return {
                ...state,
                userGoogle: action.payload
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
        case INP_FULLNAME:
            return {
                ...state,
                fullNameSignUp: action.payload
            }
        case INP_PHONE:
            return {
                ...state,
                phoneSignUp: action.payload
            }
        case INP_EMAIL:
            return {
                ...state,
                emailSignUp: action.payload
            }
        case INP_ADDRESS:
            return {
                ...state,
                addressSignUp: action.payload
            }
        case INP_CITY:
            return {
                ...state,
                citySignUp: action.payload
            }
        case INP_COUNTRY:
            return {
                ...state,
                coutrySignUp: action.payload
            }
        case INP_PASSWORD:
            return {
                ...state,
                passwordSignUp: action.payload
            }
        case GET_CUSTOMER_DATA:
            return {
                ...state,
                customerData: action.payload
            }
        case CREATE_NEW_CUSTOMER:
            return {
                ...state,
                newCustomer: action.payload
            }
        default:
            return state;
    }
}

export default CustomerReducer

