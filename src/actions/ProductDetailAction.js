import { GET_DATA_PRODUCT_BY_ID } from "../constants/ProductListType";

export const ProductDetailAction = (paramId) => async dispatch => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }
    try {
        const response = await fetch(`https://freshop-backendcloud.herokuapp.com/productRouters/${paramId}`, requestOptions);
        const data = await response.json();
        return dispatch({
            type: GET_DATA_PRODUCT_BY_ID,
            payload: data.product
        });
    }
    catch (error) {
        console.log(error)
    }
}