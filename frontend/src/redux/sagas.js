import { all, takeLeading, put } from "redux-saga/effects";
import { FETCH_ALL_PRODUCTS_REQUEST, FETCH_ALL_PRODUCTS_SUCCESS, FETCH_ALL_PRODUCTS_FAILURE } from "./actions";
import { fetchAllProducts } from "../services/ProductService";
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


export default function* rootSaga() {
    yield all([
        fetchAllProductsSaga()
    ])
}