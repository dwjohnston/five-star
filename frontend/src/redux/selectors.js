export function createEmptyProduct() {
    return {
        id: "",
        name: "",
        priceUsd: "",
    }
}

export function isUpdateLoading(state) {
    return state.loadingFlags.productUpdate;
}

export function selectAllProducts(state) {
    return Object.values(state.products)
}

export function selectProductByProductId(state, id) {
    return state.products[id];
}

export function selectErrors(state) {
    return state.errors.errors;
}

export function selectCurrencyRate(state) {
    return state.currencyRate.rate;
}