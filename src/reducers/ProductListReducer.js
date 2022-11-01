import {
    GET_DATA_PRODUCT,
    FILTER_PRODUCT,
    PAGINATION
} from "../constants/ProductListType"

const initialState = {
    products: [],
    productsFilter: [],
    currentPage: 1,
    numPage: 0
}

const limitProduct = 12;


const ProductListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_PRODUCT:
            return {
                ...state,
                products: action.payload.slice((state.currentPage - 1) * limitProduct, state.currentPage * limitProduct),
                numPage: Math.ceil(action.payload.length / limitProduct)
            }
        case PAGINATION:
            return {
                ...state,
                currentPage: action.payload
            }
        case FILTER_PRODUCT:
            return {
                ...state,
                productsFilter: action.payload.slice((state.currentPage - 1) * limitProduct, state.currentPage * limitProduct),
                numPage: Math.ceil(action.payload.length / limitProduct)
            }
        default:
            return state;
    }
}

export default ProductListReducer;