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

export const GoogleLogin = (value) => {
    return {
        type: LOGIN_GOOGLE,
        payload: value
    }
}

export const inpUserNameLogin = (value) => {
    return {
        type: USER_NAME,
        payload: value
    }
}

export const inpPasswordLogin = (value) => {
    return {
        type: USER_PASSWORD,
        payload: value
    }
}


export const inpFullNameSignUp = (value) => {
    return {
        type: INP_FULLNAME,
        payload: value
    }
}

export const inpPhoneSignUp = (value) => {
    return {
        type: INP_PHONE,
        payload: value
    }
}

export const inpEmailSignUp = (value) => {
    return {
        type: INP_EMAIL,
        payload: value
    }
}

export const inpAdressSignUp = (value) => {
    return {
        type: INP_ADDRESS,
        payload: value
    }
}

export const inpCitySignUp = (value) => {
    return {
        type: INP_CITY,
        payload: value
    }
}

export const inpCountrySignUp = (value) => {
    return {
        type: INP_COUNTRY,
        payload: value
    }
}

export const inpPasswordSignUp = (value) => {
    return {
        type: INP_PASSWORD,
        payload: value
    }
}

export const createNewCus = (body) => async dispatch => {
    // console.log(dataUser)
    // var requestOptions = {
    //     method: 'POST',
    //     redirect: 'follow',
    //     body: dataUser
    // }
    try {
        const response = await fetch(`http://localhost:8000/customers`, body);
        const data = await response.json();
        console.log(data)
        return dispatch({
            type: CREATE_NEW_CUSTOMER,
            payload: data?.Customer||data
        });
    }
    catch (error) {
        console.log("error")
    }
}

export const getCusData = () => async dispatch => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }
    try {
        const response = await fetch(`http://localhost:8000/customers`, requestOptions);
        const data = await response.json();
        return dispatch({
            type: GET_CUSTOMER_DATA,
            payload: data.Customer
        });
    }
    catch (error) {
        console.log(error)
    }
}

