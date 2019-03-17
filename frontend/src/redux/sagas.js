import { all, takeLeading, put, call } from "redux-saga/effects";
import {
    FETCH_ALL_PRODUCTS_REQUEST,
    FETCH_ALL_PRODUCTS_SUCCESS,
    FETCH_ALL_PRODUCTS_FAILURE,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_FAILURE,
    DELETE_PRODUCT_SUCCESS,
    CLEAR_ERRORS_REQUEST,
    CLEAR_ERRORS_FAILURE,
    CLEAR_ERRORS_SUCCESS,
    FETCH_CURRENCY_RATE_REQUEST,
    FETCH_CURRENCY_RATE_SUCCESS,
    FETCH_CURRENCY_RATE_FAILURE
} from "./actions";
import { fetchAllProducts, patchProduct, postProduct, deleteProduct } from "../services/ProductService";
import { fetchUsdToAudRate } from "../services/CurrencyConversionService";
export function* fetchAllProductsSaga() {
    yield takeLeading(FETCH_ALL_PRODUCTS_REQUEST, function* () {
        try {
            const result = yield call(fetchAllProducts);
            console.log(result);
            yield put({
                type: FETCH_ALL_PRODUCTS_SUCCESS,
                payload: result
            })
        }
        catch (err) {

            console.error(err);
            yield put({
                type: FETCH_ALL_PRODUCTS_FAILURE,
                payload: err
            });
        }
    });
}

export function isNewProduct(product) {
    return product.id === undefined || product.id.length === 0
}

export function* updateProductSaga() {
    yield takeLeading(UPDATE_PRODUCT_REQUEST, function* (action) {
        try {
            const { payload } = action;
            let result;

            if (isNewProduct(payload)) {
                result = yield call(postProduct, payload);
            }
            else {
                result = yield call(patchProduct, payload);
            }

            yield put({
                type: UPDATE_PRODUCT_SUCCESS,
                payload: result
            })
        }
        catch (err) {

            console.error(err);
            yield put({
                type: UPDATE_PRODUCT_FAILURE,
                payload: err
            });
        }
    });
}

export function* deleteProductSaga() {
    yield takeLeading(DELETE_PRODUCT_REQUEST, function* (action) {
        try {
            const { payload } = action;
            const result = yield call(deleteProduct, payload);

            yield put({
                type: DELETE_PRODUCT_SUCCESS,
                payload: result
            })
        }
        catch (err) {

            console.error(err);
            yield put({
                type: DELETE_PRODUCT_FAILURE,
                payload: err
            });
        }
    });
}

export function* clearErrorsSaga() {
    yield takeLeading(CLEAR_ERRORS_REQUEST, function* () {
        try {
            yield put({
                type: CLEAR_ERRORS_SUCCESS,
            })
        }
        catch (err) {
            yield put({
                type: CLEAR_ERRORS_FAILURE,
                payload: err
            });
        }
    });
}

export function* fetchCurrencyRateSaga() {
    yield takeLeading(FETCH_CURRENCY_RATE_REQUEST, function* () {
        try {

            const rate = yield call(fetchUsdToAudRate);
            yield put({
                type: FETCH_CURRENCY_RATE_SUCCESS,
                payload: rate,
            })
        }
        catch (err) {
            yield put({
                type: FETCH_CURRENCY_RATE_FAILURE,
                payload: err
            });
        }
    });
}




export default function* rootSaga() {
    yield all([
        fetchAllProductsSaga(),
        updateProductSaga(),
        deleteProductSaga(),
        clearErrorsSaga(),
        fetchCurrencyRateSaga(),
    ])
}