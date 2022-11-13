import {
    LOGIN_GOOGLE,
    EMAIL_LOGIN,
    PASSWORD_LOGIN,
    INP_FULLNAME,
    INP_PHONE,
    INP_EMAIL,
    INP_DISTRICT,
    INP_WARD,
    INP_ADDRESS,
    INP_CITY,
    INP_PASSWORD,
    GET_CUSTOMER_DATA,
    CREATE_NEW_CUSTOMER
} from '../constants/CustomerType'

const initialState = {
    userGoogle: null,
    passwordLogin: "",
    emailLogin: "",
    fullNameSignUp: "",
    phoneSignUp: "",
    emailSignUp: "",
    addressSignUp: "",
    wardSignUp: "",
    districtSignUp: "",
    citySignUp: "",
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
        case EMAIL_LOGIN:
            return {
                ...state,
                emailLogin: action.payload
            }
        case PASSWORD_LOGIN:
            return {
                ...state,
                passwordLogin: action.payload
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
        case INP_WARD: 
            return {
                ...state,
                wardSignUp: action.payload
            }
        case INP_DISTRICT:
            return {
                ...state,
                districtSignUp: action.payload
            }
        case INP_CITY:
            return {
                ...state,
                citySignUp: action.payload
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

