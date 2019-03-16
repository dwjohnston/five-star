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

export function requestUpdateProduct(productId, productData) {
    return {
        type: UPDATE_PRODUCT_REQUEST,
        payload: {
            productId,
            productData
        }
    }
}

export const CREATE_NEW_PRODUCT_BASE =
    'CREATE_NEW_PRODUCT_BASE';
export const CREATE_NEW_PRODUCT_REQUEST =
    'CREATE_NEW_PRODUCT_REQUEST';
export const CREATE_NEW_PRODUCT_SUCCESS =
    'CREATE_NEW_PRODUCT_SUCCESS';
export const CREATE_NEW_PRODUCT_FAILURE =
    'QUIZE_FETCH_FAILURE';
export const CREATE_NEW_PRODUCT_CLEAR =
    'CREATE_NEW_PRODUCT_CLEAR';

export function requestCreateNewProduct(productData) {
    return {
        type: CREATE_NEW_PRODUCT_REQUEST,
        payload: {
            productData
        }
    };
}