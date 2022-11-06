import {
    GET_DATA_PRODUCT,
    FILTER_PRODUCT,
    PAGINATION
} from "../constants/ProductListType"


export const getAllListData = () => async dispatch => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }
    try {
        const response = await fetch(`http://localhost:8000/productRouters`, requestOptions);
        const data = await response.json();
        return dispatch({
            type: GET_DATA_PRODUCT,
            payload: data.productList
        });
    }
    catch (error) {
        console.log(error)
    }
}

export const FilterAction = (filterMaxPrice, filterMinPrice, filterName , filterCategories) => async dispatch => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }
    try {
        if (filterMaxPrice === 1000000000 && filterMinPrice === 0 && filterName === "" && filterCategories === "") {
            const response = await fetch(`http://localhost:8000/productRouters`, requestOptions);
            const data = await response.json();
            return dispatch({
                type: GET_DATA_PRODUCT,
                payload: data.productList
            });
        } else if (filterMaxPrice !== 1000000000 || filterMinPrice !== 0 || filterName !== "" || filterCategories !== "") {
            const response = await fetch(`http://localhost:8000/productRouters/?filterMaxPrice=${filterMaxPrice}&filterMinPrice=${filterMinPrice}&filterName=${filterName}&filterCategories=${filterCategories}`, requestOptions);
            const data = await response.json();
            return dispatch({
                type: FILTER_PRODUCT,
                payload: data.productList
            });
        } 

    }
    catch (error) {
        console.log(error)
    }
}


export const ChangeNoPage = (value) => {
    return {
        type: PAGINATION,
        payload: value
    }
}