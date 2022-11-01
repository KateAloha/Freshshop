import { FILTER_CATEGORIES, FILTER_MAX_PRICE, FILTER_MIN_PRICE, FILTER_NAME } from "../constants/FilterType";

export function FilterNameAction(value) {
    return {
        type: FILTER_NAME,
        payload: value
    }
}
export function FilterMinPriceAction(value) {
    return {
        type: FILTER_MIN_PRICE,
        payload: value
    }
}
export function FilterMaxPriceAction(value) {
    return {
        type: FILTER_MAX_PRICE,
        payload: value
    }
}
export function FilterCategoriesAction(value) {
    return {
        type: FILTER_CATEGORIES,
        payload: value
    }
}
