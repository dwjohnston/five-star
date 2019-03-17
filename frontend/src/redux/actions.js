export const FETCH_ALL_PRODUCTS_BASE =
    'FETCH_ALL_PRODUCTS_BASE';
export const FETCH_ALL_PRODUCTS_REQUEST =
    'FETCH_ALL_PRODUCTS_REQUEST';
export const FETCH_ALL_PRODUCTS_SUCCESS =
    'FETCH_ALL_PRODUCTS_SUCCESS';
export const FETCH_ALL_PRODUCTS_FAILURE =
    'FETCH_ALL_PRODUCTS_FAILURE';
export const FETCH_ALL_PRODUCTS_CLEAR =
    'FETCH_ALL_PRODUCTS_CLEAR';

export function requestFetchAllProducts() {
    return {
        type: FETCH_ALL_PRODUCTS_REQUEST,
        payload: null
    }
}

export const UPDATE_PRODUCT_BASE =
    'UPDATE_PRODUCT_BASE';
export const UPDATE_PRODUCT_REQUEST =
    'UPDATE_PRODUCT_REQUEST';
export const UPDATE_PRODUCT_SUCCESS =
    'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILURE =
    'UPDATE_PRODUCT_FAILURE';
export const UPDATE_PRODUCT_CLEAR =
    'UPDATE_PRODUCT_CLEAR';

export function requestUpdateProduct(productData) {
    return {
        type: UPDATE_PRODUCT_REQUEST,
        payload: productData,
    }
}

export const DELETE_PRODUCT_BASE =
    'DELETE_PRODUCT_BASE';
export const DELETE_PRODUCT_REQUEST =
    'DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_SUCCESS =
    'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE =
    'QUIZE_FETCH_FAILURE';
export const DELETE_PRODUCT_CLEAR =
    'DELETE_PRODUCT_CLEAR';
export function requestDeleteProduct(product) {
    return {
        type: DELETE_PRODUCT_REQUEST,
        payload: product,
    }
}

export const CLEAR_ERRORS_BASE =
    'CLEAR_ERRORS_BASE';
export const CLEAR_ERRORS_REQUEST =
    'CLEAR_ERRORS_REQUEST';
export const CLEAR_ERRORS_SUCCESS =
    'CLEAR_ERRORS_SUCCESS';
export const CLEAR_ERRORS_FAILURE =
    'CLEAR_ERRORS_FAILURE';
export const CLEAR_ERRORS_CLEAR =
    'CLEAR_ERRORS_CLEAR';

export function requestClearErrors() {
    return {
        type: CLEAR_ERRORS_REQUEST,
        payload: null
    }
}


export const FETCH_CURRENCY_RATE_BASE =
    'FETCH_CURRENCY_RATE_BASE';
export const FETCH_CURRENCY_RATE_REQUEST =
    'FETCH_CURRENCY_RATE_REQUEST';
export const FETCH_CURRENCY_RATE_SUCCESS =
    'FETCH_CURRENCY_RATE_SUCCESS';
export const FETCH_CURRENCY_RATE_FAILURE =
    'FETCH_CURRENCY_RATE_FAILURE';
export const FETCH_CURRENCY_RATE_CLEAR =
    'FETCH_CURRENCY_RATE_CLEAR';

export function requestFetchCurrencyRate() {
    return {
        type: FETCH_CURRENCY_RATE_REQUEST
    }
}