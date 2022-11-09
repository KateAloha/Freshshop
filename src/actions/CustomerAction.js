import {
    LOGIN_GOOGLE,
    EMAIL_LOGIN,
    PASSWORD_LOGIN,
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

export const inpEmailLogin = (value) => {
    return {
        type: EMAIL_LOGIN,
        payload: value
    }
}

export const inpPasswordLogin = (value) => {
    return {
        type: PASSWORD_LOGIN,
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

export const createNewCus = (dataUser, setAlert, setAlertColor, setTextAlert) => async dispatch => {
    console.log(dataUser)
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify({
            fullName: dataUser.fullName,
            phone: dataUser.phone,
            email: dataUser.email,
            address: dataUser.address,
            city: dataUser.city,
            country: dataUser.country,
            password: dataUser.password,
            orders: [],
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }

    }
    try {
        const response = await fetch(`http://localhost:8000/customers`, requestOptions);
        const data = await response.json();
        console.log(data)
        setAlert(true)
        setAlertColor("success")
        setTextAlert("Sign Up successfully, PLease login to active your account")
        return dispatch({
            type: CREATE_NEW_CUSTOMER,
            payload: data?.newCustomer
        });
    }
    catch (error) {
        console.log("error")
        setAlert(true)
        setAlertColor("error")
        setTextAlert("Sign Up Unsuccessfully: ", error)
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
            payload: data?.Customer
        });
    }
    catch (error) {
        console.log(error)
    }
}

