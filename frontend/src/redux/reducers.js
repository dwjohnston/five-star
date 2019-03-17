import { combineReducers } from "redux";
import { FETCH_ALL_PRODUCTS_SUCCESS, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS, CLEAR_ERRORS_REQUEST, CLEAR_ERRORS_SUCCESS, FETCH_CURRENCY_RATE_SUCCESS } from "./actions";


const initialState = {};
export function productsReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_ALL_PRODUCTS_SUCCESS: {
            //Index products by product id. 
            return payload.reduce((acc, cur) => {
                return { ...acc, [cur.id]: cur };
            }, {});
        }

        case UPDATE_PRODUCT_SUCCESS: {
            //Add/replace product to existing product index
            return { ...state, [payload.id]: payload }
        }

        case DELETE_PRODUCT_SUCCESS: {
            const newState = { ...state };
            delete newState[payload.id];
            return newState;
        }


        default: return state;
    }
}

const initialLoadingState = {
    updateProduct: false,
}
/**
 * This is obviously not a sustainable way to handle loading flags, but works for a quick demo. 
 * 
 * Better solution is a modified version of this: 
 * https://medium.com/stashaway-engineering/react-redux-tips-better-way-to-handle-loading-flags-in-your-reducers-afda42a804c6
 */
export function loadingFlagsReducer(state = initialLoadingState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_PRODUCT_REQUEST: return { ...state, updateProduct: true }
        case UPDATE_PRODUCT_SUCCESS: return { ...state, updateProduct: false }
        case UPDATE_PRODUCT_FAILURE: return { ...state, updateProduct: false }
        default: return state;

    }
}

const initialErrorState = {
    errors: null,
}

export function errorsReducer(state = initialErrorState, action) {
    const { type, payload } = action;

    if (type.split('_').pop() === 'FAILURE') {
        return {
            errors: payload
        }
    }

    if (type === CLEAR_ERRORS_SUCCESS) {
        return initialErrorState;
    }

    return state;
}

const initialCurrencyRateState = {
    rate: null,
}

export function currencyRateReducer(state = initialCurrencyRateState, action) {
    const { type, payload } = action;
    switch (type) {
        case FETCH_CURRENCY_RATE_SUCCESS: return {
            rate: payload
        }

        default: return state;
    }
}

const rootReducer = combineReducers({
    products: productsReducer,
    loadingFlags: loadingFlagsReducer,
    errors: errorsReducer,
    currencyRate: currencyRateReducer,
});


export default rootReducer; 