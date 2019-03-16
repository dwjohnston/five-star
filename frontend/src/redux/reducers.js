import { combineReducers } from "redux";
import { FETCH_ALL_PRODUCTS_SUCCESS } from "./actions";


const initialState = [];
export function productsReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_ALL_PRODUCTS_SUCCESS: {
            return payload
        }

        default: return state;
    }
}

const rootReducer = combineReducers({
    products: productsReducer,
});


export default rootReducer; 