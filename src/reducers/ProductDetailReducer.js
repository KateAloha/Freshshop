import { GET_DATA_PRODUCT_BY_ID } from "../constants/ProductListType";

const initialState = {
    product: "",
}


const ProductDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_PRODUCT_BY_ID:
            return {
                ...state,
                product: action.payload
            }

        default:
            return state;
    }
}

export default ProductDetailReducer;
