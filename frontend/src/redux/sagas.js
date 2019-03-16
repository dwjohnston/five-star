import { all, takeLeading, put } from "redux-saga/effects";
import {
    FETCH_ALL_PRODUCTS_REQUEST,
    FETCH_ALL_PRODUCTS_SUCCESS,
    FETCH_ALL_PRODUCTS_FAILURE,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE
} from "./actions";
import { fetchAllProducts, patchProduct, postProduct } from "../services/ProductService";
export function* fetchAllProductsSaga() {
    yield takeLeading(FETCH_ALL_PRODUCTS_REQUEST, function* () {
        try {
            const result = yield fetchAllProducts();
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
    return product.id === undefined;
}

export function* updateProductSaga() {
    yield takeLeading(UPDATE_PRODUCT_REQUEST, function* (action) {
        try {
            const { payload } = action;
            let result;

            if (isNewProduct(payload)) {
                result = yield postProduct(payload);
            }
            else {
                result = yield patchProduct(payload);
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


export default function* rootSaga() {
    yield all([
        fetchAllProductsSaga(),
        updateProductSaga(),
    ])
}