import { FILTER_NAME, FILTER_MAX_PRICE, FILTER_MIN_PRICE, FILTER_CATEGORIES} from '../constants/FilterType'


const initialState = {
    filterMaxPrice: 1000000000,
    filterMinPrice: 0,
    filterName: "",
    filterCategories: "",
}

const FilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_NAME:
            return {
                ...state,
                filterName: action.payload
            }
        case FILTER_MAX_PRICE:
            return {
                ...state,
                filterMaxPrice: action.payload
            }
        case FILTER_MIN_PRICE:
            return {
                ...state,
                filterMinPrice: action.payload
            }
        case FILTER_CATEGORIES:
            return {
                ...state,
                filterCategories: action.payload
            }
        default:
            return state;
    }
}

export default FilterReducer;